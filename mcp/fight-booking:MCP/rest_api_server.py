#!/usr/bin/env python3
"""
REST API Server for Flight Booking MCP
Provides HTTP endpoints that work reliably without MCP client issues
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import asyncio
from flight_booking_fastmcp import (
    search_flights, book_flight, cancel_booking, 
    list_airports, list_airlines,
    get_flight_status, get_booking_details, get_airport_info,
    find_flight_suggestions, booking_confirmation_template, travel_tips
)

# Create FastAPI app
app = FastAPI(title="Flight Booking API", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================================
# 🛠️ TOOL ENDPOINTS
# ============================================================================

@app.post("/tools/search_flights")
async def api_search_flights(request: dict):
    """Search for flights"""
    try:
        result = await search_flights(
            request.get("departure_airport"),
            request.get("arrival_airport"),
            request.get("departure_date"),
            request.get("passengers", 1),
            request.get("return_date")
        )
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/tools/book_flight")
async def api_book_flight(request: dict):
    """Book a flight"""
    try:
        result = await book_flight(
            request.get("flight_id"),
            request.get("passenger_name"),
            request.get("passenger_email"),
            request.get("seat_preference", "any")
        )
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/tools/cancel_booking")
async def api_cancel_booking(request: dict):
    """Cancel a booking"""
    try:
        result = await cancel_booking(request.get("booking_id"))
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/tools/list_airports")
async def api_list_airports():
    """List all airports"""
    try:
        result = await list_airports()
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/tools/list_airlines")
async def api_list_airlines():
    """List all airlines"""
    try:
        result = await list_airlines()
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============================================================================
# 📚 RESOURCE ENDPOINTS
# ============================================================================

@app.get("/resources/flight/status/{flight_id}")
async def api_flight_status(flight_id: str):
    """Get flight status"""
    try:
        result = await get_flight_status(flight_id)
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/resources/booking/details/{booking_id}")
async def api_booking_details(booking_id: str):
    """Get booking details"""
    try:
        result = await get_booking_details(booking_id)
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/resources/airport/info/{airport_code}")
async def api_airport_info(airport_code: str):
    """Get airport info"""
    try:
        result = await get_airport_info(airport_code)
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============================================================================
# 💬 PROMPT ENDPOINTS
# ============================================================================

@app.post("/prompts/find_flight_suggestions")
async def api_flight_suggestions(request: dict):
    """Get flight suggestions"""
    try:
        result = await find_flight_suggestions(request.get("travel_preferences"))
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/prompts/booking_confirmation_template")
async def api_booking_confirmation(request: dict):
    """Get booking confirmation template"""
    try:
        result = await booking_confirmation_template(
            request.get("passenger_name"),
            request.get("flight_details")
        )
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/prompts/travel_tips")
async def api_travel_tips(request: dict):
    """Get travel tips"""
    try:
        result = await travel_tips(request.get("destination"))
        return {"success": True, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============================================================================
# 🏠 HEALTH CHECK
# ============================================================================

@app.get("/")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Flight Booking API",
        "version": "1.0.0",
        "endpoints": {
            "tools": [
                "POST /tools/search_flights",
                "POST /tools/book_flight", 
                "POST /tools/cancel_booking",
                "GET /tools/list_airports",
                "GET /tools/list_airlines"
            ],
            "resources": [
                "GET /resources/flight/status/{flight_id}",
                "GET /resources/booking/details/{booking_id}",
                "GET /resources/airport/info/{airport_code}"
            ],
            "prompts": [
                "POST /prompts/find_flight_suggestions",
                "POST /prompts/booking_confirmation_template",
                "POST /prompts/travel_tips"
            ]
        }
    }

if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting Flight Booking REST API Server...")
    print("📡 Available endpoints:")
    print("  - GET  / (health check)")
    print("  - POST /tools/search_flights")
    print("  - POST /tools/book_flight")
    print("  - POST /tools/cancel_booking")
    print("  - GET  /tools/list_airports")
    print("  - GET  /tools/list_airlines")
    print("  - GET  /resources/flight/status/{flight_id}")
    print("  - GET  /resources/booking/details/{booking_id}")
    print("  - GET  /resources/airport/info/{airport_code}")
    print("  - POST /prompts/find_flight_suggestions")
    print("  - POST /prompts/booking_confirmation_template")
    print("  - POST /prompts/travel_tips")
    print("\n🌐 Server will be available at: http://localhost:8000")
    
    uvicorn.run(app, host="0.0.0.0", port=8000)
