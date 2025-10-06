#!/usr/bin/env python3
"""
Flight Booking MCP Server using FastMCP

A modern Model Context Protocol server using FastMCP framework
that provides flight booking functionality with Tools, Resources, and Prompts.
"""

import random
from datetime import datetime, timedelta
from typing import Dict, List, Any
from dataclasses import dataclass

from mcp.server.fastmcp import FastMCP

# Initialize FastMCP server
mcp = FastMCP("flight-booking-server")

# Data models
@dataclass
class Flight:
    id: str
    airline: str
    flight_number: str
    departure_airport: str
    arrival_airport: str
    departure_time: str
    arrival_time: str
    duration: str
    price: float
    available_seats: int
    aircraft_type: str

@dataclass
class Booking:
    id: str
    flight_id: str
    passenger_name: str
    passenger_email: str
    seat_number: str
    booking_date: str
    status: str
    total_price: float

# Sample data
AIRPORTS = [
    {"code": "JFK", "name": "John F. Kennedy International Airport", "city": "New York", "country": "USA"},
    {"code": "LAX", "name": "Los Angeles International Airport", "city": "Los Angeles", "country": "USA"},
    {"code": "LHR", "name": "London Heathrow Airport", "city": "London", "country": "UK"},
    {"code": "CDG", "name": "Charles de Gaulle Airport", "city": "Paris", "country": "France"},
    {"code": "NRT", "name": "Narita International Airport", "city": "Tokyo", "country": "Japan"},
    {"code": "SYD", "name": "Sydney Kingsford Smith Airport", "city": "Sydney", "country": "Australia"},
    {"code": "DXB", "name": "Dubai International Airport", "city": "Dubai", "country": "UAE"},
    {"code": "SIN", "name": "Singapore Changi Airport", "city": "Singapore", "country": "Singapore"},
]

AIRLINES = [
    "American Airlines", "Delta Air Lines", "United Airlines", "Southwest Airlines",
    "British Airways", "Air France", "Lufthansa", "Emirates", "Singapore Airlines",
    "Japan Airlines", "Qantas", "Turkish Airlines"
]

# In-memory storage
flights_db: List[Flight] = []
bookings_db: List[Booking] = []

def generate_sample_flights():
    """Generate sample flight data"""
    global flights_db
    if flights_db:
        return
    
    base_date = datetime.now() + timedelta(days=1)
    
    for i in range(50):
        departure_airport = random.choice(AIRPORTS)
        arrival_airport = random.choice([ap for ap in AIRPORTS if ap["code"] != departure_airport["code"]])
        
        departure_time = base_date + timedelta(
            days=random.randint(0, 30),
            hours=random.randint(6, 22),
            minutes=random.choice([0, 15, 30, 45])
        )
        
        duration_hours = random.randint(1, 12)
        arrival_time = departure_time + timedelta(hours=duration_hours)
        
        flight = Flight(
            id=f"FL{i+1:03d}",
            airline=random.choice(AIRLINES),
            flight_number=f"{random.choice(['AA', 'DL', 'UA', 'BA', 'AF'])}{random.randint(100, 9999)}",
            departure_airport=departure_airport["code"],
            arrival_airport=arrival_airport["code"],
            departure_time=departure_time.strftime("%Y-%m-%d %H:%M"),
            arrival_time=arrival_time.strftime("%Y-%m-%d %H:%M"),
            duration=f"{duration_hours}h {random.randint(0, 59)}m",
            price=round(random.uniform(200, 2000), 2),
            available_seats=random.randint(5, 200),
            aircraft_type=random.choice(["Boeing 737", "Airbus A320", "Boeing 777", "Airbus A350"])
        )
        flights_db.append(flight)

# ============================================================================
# 🛠️ TOOLS - Functions that can be called to perform actions
# ============================================================================

@mcp.tool()
async def search_flights(
    departure_airport: str,
    arrival_airport: str, 
    departure_date: str,
    passengers: int = 1,
    return_date: str = None
) -> Dict[str, Any]:
    """
    Search for available flights between airports on specific dates.
    
    Args:
        departure_airport: IATA airport code for departure (e.g., JFK, LAX)
        arrival_airport: IATA airport code for arrival (e.g., LHR, CDG)
        departure_date: Departure date in YYYY-MM-DD format
        passengers: Number of passengers (default: 1)
        return_date: Return date for round-trip flights (optional)
    
    Returns:
        Dictionary containing flight search results
    """
    generate_sample_flights()
    
    departure_airport = departure_airport.upper()
    arrival_airport = arrival_airport.upper()
    
    # Filter flights
    matching_flights = []
    for flight in flights_db:
        if (flight.departure_airport == departure_airport and 
            flight.arrival_airport == arrival_airport and
            flight.departure_time.startswith(departure_date) and
            flight.available_seats >= passengers):
            matching_flights.append({
                "id": flight.id,
                "airline": flight.airline,
                "flight_number": flight.flight_number,
                "departure_airport": flight.departure_airport,
                "arrival_airport": flight.arrival_airport,
                "departure_time": flight.departure_time,
                "arrival_time": flight.arrival_time,
                "duration": flight.duration,
                "price": flight.price,
                "available_seats": flight.available_seats,
                "aircraft_type": flight.aircraft_type
            })
    
    # Sort by price
    matching_flights.sort(key=lambda x: x["price"])
    
    return {
        "search_criteria": {
            "departure_airport": departure_airport,
            "arrival_airport": arrival_airport,
            "departure_date": departure_date,
            "passengers": passengers,
            "return_date": return_date
        },
        "results_count": len(matching_flights),
        "flights": matching_flights[:10]  # Top 10 results
    }

@mcp.tool()
async def book_flight(
    flight_id: str,
    passenger_name: str,
    passenger_email: str,
    seat_preference: str = "any"
) -> Dict[str, Any]:
    """
    Book a specific flight for a passenger.
    
    Args:
        flight_id: ID of the flight to book
        passenger_name: Full name of the passenger
        passenger_email: Email address of the passenger
        seat_preference: Seat preference (window, aisle, middle, or specific seat)
    
    Returns:
        Dictionary containing booking confirmation details
    """
    generate_sample_flights()
    
    # Find the flight
    flight = next((f for f in flights_db if f.id == flight_id), None)
    if not flight:
        return {"error": f"Flight {flight_id} not found"}
    
    if flight.available_seats <= 0:
        return {"error": f"Flight {flight_id} is fully booked"}
    
    # Generate seat number
    seat_number = f"{random.randint(1, 30)}{random.choice(['A', 'B', 'C', 'D', 'E', 'F'])}"
    
    # Create booking
    booking = Booking(
        id=f"BK{len(bookings_db)+1:04d}",
        flight_id=flight_id,
        passenger_name=passenger_name,
        passenger_email=passenger_email,
        seat_number=seat_number,
        booking_date=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        status="confirmed",
        total_price=flight.price
    )
    
    bookings_db.append(booking)
    
    # Update flight availability
    flight.available_seats -= 1
    
    return {
        "booking_id": booking.id,
        "passenger_name": passenger_name,
        "passenger_email": passenger_email,
        "flight_details": {
            "id": flight.id,
            "airline": flight.airline,
            "flight_number": flight.flight_number,
            "departure_airport": flight.departure_airport,
            "arrival_airport": flight.arrival_airport,
            "departure_time": flight.departure_time,
            "arrival_time": flight.arrival_time,
            "duration": flight.duration
        },
        "seat_number": seat_number,
        "total_price": booking.total_price,
        "status": booking.status,
        "booking_date": booking.booking_date
    }

@mcp.tool()
async def cancel_booking(booking_id: str) -> Dict[str, Any]:
    """
    Cancel a flight booking.
    
    Args:
        booking_id: ID of the booking to cancel
    
    Returns:
        Dictionary containing cancellation details
    """
    booking = next((b for b in bookings_db if b.id == booking_id), None)
    if not booking:
        return {"error": f"Booking {booking_id} not found"}
    
    if booking.status == "cancelled":
        return {"error": f"Booking {booking_id} is already cancelled"}
    
    # Update booking status
    booking.status = "cancelled"
    
    # Restore flight availability
    flight = next((f for f in flights_db if f.id == booking.flight_id), None)
    if flight:
        flight.available_seats += 1
    
    return {
        "booking_id": booking_id,
        "passenger_name": booking.passenger_name,
        "refund_amount": booking.total_price,
        "cancellation_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "status": "cancelled"
    }

@mcp.tool()
async def list_airports() -> Dict[str, Any]:
    """
    List all available airports with their codes and locations.
    
    Returns:
        Dictionary containing all available airports
    """
    return {
        "airports": AIRPORTS,
        "total_count": len(AIRPORTS)
    }

@mcp.tool()
async def list_airlines() -> Dict[str, Any]:
    """
    List all available airlines.
    
    Returns:
        Dictionary containing all available airlines
    """
    return {
        "airlines": AIRLINES,
        "total_count": len(AIRLINES)
    }

# ============================================================================
# 📚 RESOURCES - Data sources accessible via URIs
# ============================================================================

@mcp.resource("flight://status/{flight_id}")
async def get_flight_status(flight_id: str) -> Dict[str, Any]:
    """
    Get real-time status of a specific flight.
    
    Args:
        flight_id: ID of the flight to check
    
    Returns:
        Dictionary containing flight status information
    """
    generate_sample_flights()
    
    flight = next((f for f in flights_db if f.id == flight_id), None)
    if not flight:
        return {"error": f"Flight {flight_id} not found"}
    
    # Simulate different statuses
    statuses = ["on_time", "delayed", "boarding", "departed", "arrived"]
    current_status = random.choice(statuses)
    
    return {
        "flight_id": flight_id,
        "flight_number": flight.flight_number,
        "airline": flight.airline,
        "departure_airport": flight.departure_airport,
        "arrival_airport": flight.arrival_airport,
        "scheduled_departure": flight.departure_time,
        "scheduled_arrival": flight.arrival_time,
        "status": current_status,
        "gate": f"Gate {random.randint(1, 50)}" if current_status in ["boarding", "delayed"] else None,
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

@mcp.resource("booking://details/{booking_id}")
async def get_booking_details(booking_id: str) -> Dict[str, Any]:
    """
    Get detailed information about a specific booking.
    
    Args:
        booking_id: ID of the booking to retrieve
    
    Returns:
        Dictionary containing booking details
    """
    booking = next((b for b in bookings_db if b.id == booking_id), None)
    if not booking:
        return {"error": f"Booking {booking_id} not found"}
    
    flight = next((f for f in flights_db if f.id == booking.flight_id), None)
    if not flight:
        return {"error": f"Flight details not found for booking {booking_id}"}
    
    return {
        "booking_id": booking.id,
        "passenger_name": booking.passenger_name,
        "passenger_email": booking.passenger_email,
        "flight_details": {
            "id": flight.id,
            "airline": flight.airline,
            "flight_number": flight.flight_number,
            "departure_airport": flight.departure_airport,
            "arrival_airport": flight.arrival_airport,
            "departure_time": flight.departure_time,
            "arrival_time": flight.arrival_time,
            "duration": flight.duration,
            "aircraft_type": flight.aircraft_type
        },
        "seat_number": booking.seat_number,
        "total_price": booking.total_price,
        "status": booking.status,
        "booking_date": booking.booking_date
    }

@mcp.resource("airport://info/{airport_code}")
async def get_airport_info(airport_code: str) -> Dict[str, Any]:
    """
    Get detailed information about a specific airport.
    
    Args:
        airport_code: IATA airport code (e.g., JFK, LAX)
    
    Returns:
        Dictionary containing airport information
    """
    airport_code = airport_code.upper()
    airport = next((ap for ap in AIRPORTS if ap["code"] == airport_code), None)
    
    if not airport:
        return {"error": f"Airport {airport_code} not found"}
    
    return {
        "code": airport["code"],
        "name": airport["name"],
        "city": airport["city"],
        "country": airport["country"],
        "timezone": "UTC-5" if airport["country"] == "USA" else "UTC+0",  # Simplified
        "terminals": random.randint(1, 5),
        "runways": random.randint(2, 4),
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

# ============================================================================
# 💬 PROMPTS - Templates for generating structured prompts
# ============================================================================

@mcp.prompt()
async def find_flight_suggestions(travel_preferences: str) -> str:
    """
    Generate flight suggestions based on travel preferences.
    
    Args:
        travel_preferences: Description of travel preferences and requirements
    
    Returns:
        Formatted string with flight suggestions
    """
    generate_sample_flights()
    
    # Extract some sample flights for suggestions
    sample_flights = flights_db[:5]
    
    suggestions = f"🛫 Flight Suggestions based on: {travel_preferences}\n\n"
    suggestions += "Here are some recommended flights:\n\n"
    
    for flight in sample_flights:
        suggestions += f"✈️ {flight.airline} {flight.flight_number}\n"
        suggestions += f"   {flight.departure_airport} → {flight.arrival_airport}\n"
        suggestions += f"   Departure: {flight.departure_time}\n"
        suggestions += f"   Duration: {flight.duration}\n"
        suggestions += f"   Price: ${flight.price:.2f}\n"
        suggestions += f"   Available Seats: {flight.available_seats}\n\n"
    
    suggestions += "💡 Tips:\n"
    suggestions += "- Book early for better prices\n"
    suggestions += "- Consider flexible dates for more options\n"
    suggestions += "- Check baggage policies before booking\n"
    
    return suggestions

@mcp.prompt()
async def booking_confirmation_template(passenger_name: str, flight_details: str) -> str:
    """
    Generate a booking confirmation template.
    
    Args:
        passenger_name: Name of the passenger
        flight_details: Details of the flight being booked
    
    Returns:
        Formatted booking confirmation template
    """
    template = f"""
🎫 BOOKING CONFIRMATION TEMPLATE

Dear {passenger_name},

Thank you for choosing our flight booking service!

📋 BOOKING DETAILS:
{flight_details}

📝 IMPORTANT INFORMATION:
- Please arrive at the airport 2 hours before departure for international flights
- Check-in opens 24 hours before departure
- Bring a valid photo ID and travel documents
- Check baggage restrictions and fees

📞 CUSTOMER SERVICE:
- Phone: 1-800-FLY-BOOK
- Email: support@flightbook.com
- Available 24/7

Safe travels!
The Flight Booking Team
"""
    return template

@mcp.prompt()
async def travel_tips(destination: str) -> str:
    """
    Generate travel tips for a specific destination.
    
    Args:
        destination: Destination city or country
    
    Returns:
        Formatted travel tips
    """
    tips = f"""
🌍 TRAVEL TIPS FOR {destination.upper()}

📋 PRE-DEPARTURE CHECKLIST:
✓ Valid passport (6+ months validity)
✓ Travel insurance
✓ Local currency
✓ Power adapters
✓ Weather-appropriate clothing

🏨 ACCOMMODATION:
- Book accommodations in advance
- Check cancellation policies
- Consider location vs. price trade-offs

🍽️ LOCAL CUSTOMS:
- Research local dining customs
- Learn basic phrases in local language
- Respect cultural differences

🚗 TRANSPORTATION:
- Research local transport options
- Download offline maps
- Keep emergency contacts handy

💰 MONEY MATTERS:
- Notify your bank of travel plans
- Carry multiple payment methods
- Keep receipts for expenses

Stay safe and enjoy your trip to {destination}!
"""
    return tips

# ============================================================================
# 🚀 SERVER STARTUP
# ============================================================================

if __name__ == "__main__":
    # Generate sample data
    generate_sample_flights()
    
    print("🛫 Starting Flight Booking MCP Server with FastMCP...")
    print(f"📊 Generated {len(flights_db)} sample flights")
    print(f"🏢 Available airports: {len(AIRPORTS)}")
    print(f"✈️ Available airlines: {len(AIRLINES)}")
    print("\n🛠️ Available Tools:")
    print("  - search_flights")
    print("  - book_flight") 
    print("  - cancel_booking")
    print("  - list_airports")
    print("  - list_airlines")
    print("\n📚 Available Resources:")
    print("  - flight://status/{flight_id}")
    print("  - booking://details/{booking_id}")
    print("  - airport://info/{airport_code}")
    print("\n💬 Available Prompts:")
    print("  - find_flight_suggestions")
    print("  - booking_confirmation_template")
    print("  - travel_tips")
    print("\n🚀 Server running on SSE transport...")
    
    # Run the FastMCP server with SSE transport
    mcp.run(transport="sse", mount_path="/mcp")  # Use SSE transport
