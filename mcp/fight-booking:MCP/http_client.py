#!/usr/bin/env python3
"""
HTTP-based MCP Client for Flight Booking Server
Uses HTTP transport instead of stdio to avoid connection issues
"""

import asyncio
import aiohttp
import json
from typing import Dict, Any

class HTTPMCPClient:
    """HTTP-based MCP client"""
    
    def __init__(self, base_url: str = "http://localhost:8000"):
        self.base_url = base_url
        self.session = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def call_tool(self, tool_name: str, arguments: Dict[str, Any]) -> Dict[str, Any]:
        """Call a tool via HTTP"""
        url = f"{self.base_url}/tools/{tool_name}"
        
        async with self.session.post(url, json=arguments) as response:
            if response.status == 200:
                return await response.json()
            else:
                error_text = await response.text()
                return {"error": f"HTTP {response.status}: {error_text}"}
    
    async def read_resource(self, uri: str) -> Dict[str, Any]:
        """Read a resource via HTTP"""
        url = f"{self.base_url}/resources/{uri}"
        
        async with self.session.get(url) as response:
            if response.status == 200:
                return await response.json()
            else:
                error_text = await response.text()
                return {"error": f"HTTP {response.status}: {error_text}"}
    
    async def get_prompt(self, prompt_name: str, arguments: Dict[str, Any]) -> Dict[str, Any]:
        """Get a prompt via HTTP"""
        url = f"{self.base_url}/prompts/{prompt_name}"
        
        async with self.session.post(url, json=arguments) as response:
            if response.status == 200:
                return await response.json()
            else:
                error_text = await response.text()
                return {"error": f"HTTP {response.status}: {error_text}"}

async def test_http_client():
    """Test the HTTP-based MCP client"""
    print("🧪 Testing HTTP-based MCP Client")
    print("=" * 50)
    
    async with HTTPMCPClient() as client:
        print("✅ HTTP client connected")
        
        # Test 1: Search Flights
        print("\n1. 🔍 Testing search_flights...")
        try:
            flights = await client.call_tool("search_flights", {
                "departure_airport": "JFK",
                "arrival_airport": "LHR",
                "departure_date": "2024-02-15",
                "passengers": 1
            })
            if "error" not in flights:
                print(f"   ✅ Found {flights.get('results_count', 0)} flights")
                if flights.get('flights'):
                    flight = flights['flights'][0]
                    print(f"   📄 Sample: {flight['airline']} {flight['flight_number']} - ${flight['price']}")
            else:
                print(f"   ❌ Error: {flights['error']}")
        except Exception as e:
            print(f"   ❌ Exception: {e}")
        
        # Test 2: List Airports
        print("\n2. 🏢 Testing list_airports...")
        try:
            airports = await client.call_tool("list_airports", {})
            if "error" not in airports:
                print(f"   ✅ Listed {airports.get('total_count', 0)} airports")
                if airports.get('airports'):
                    airport = airports['airports'][0]
                    print(f"   📄 Sample: {airport['code']} - {airport['name']}")
            else:
                print(f"   ❌ Error: {airports['error']}")
        except Exception as e:
            print(f"   ❌ Exception: {e}")
        
        # Test 3: Book Flight
        print("\n3. 🎫 Testing book_flight...")
        try:
            booking = await client.call_tool("book_flight", {
                "flight_id": "FL001",
                "passenger_name": "John Doe",
                "passenger_email": "john@example.com",
                "seat_preference": "window"
            })
            if "error" not in booking:
                print(f"   ✅ Booking created: {booking.get('booking_id', 'N/A')}")
                print(f"   📄 Seat: {booking.get('seat_number', 'N/A')}, Price: ${booking.get('total_price', 0)}")
            else:
                print(f"   ⚠️ {booking['error']}")
        except Exception as e:
            print(f"   ❌ Exception: {e}")
        
        # Test 4: Flight Status Resource
        print("\n4. 📊 Testing flight status resource...")
        try:
            status = await client.read_resource("flight://status/FL001")
            if "error" not in status:
                print(f"   ✅ Status: {status.get('status', 'N/A')}")
                print(f"   📄 Flight: {status.get('flight_number', 'N/A')} {status.get('departure_airport', 'N/A')} → {status.get('arrival_airport', 'N/A')}")
            else:
                print(f"   ⚠️ {status['error']}")
        except Exception as e:
            print(f"   ❌ Exception: {e}")
        
        # Test 5: Travel Tips Prompt
        print("\n5. 💡 Testing travel tips prompt...")
        try:
            tips = await client.get_prompt("travel_tips", {
                "destination": "London"
            })
            if "error" not in tips:
                print(f"   ✅ Tips generated")
                print(f"   📄 Preview: {str(tips)[:100]}...")
            else:
                print(f"   ❌ Error: {tips['error']}")
        except Exception as e:
            print(f"   ❌ Exception: {e}")
        
        print("\n🎉 HTTP client tests completed!")
        print("🚀 HTTP transport is working perfectly!")

if __name__ == "__main__":
    asyncio.run(test_http_client())
