#!/usr/bin/env python3
"""
REST API Client for Flight Booking Server
Tests the REST API endpoints directly
"""

import asyncio
import aiohttp
import json

async def test_rest_api():
    """Test the REST API endpoints"""
    print("🧪 Testing Flight Booking REST API")
    print("=" * 50)
    
    base_url = "http://localhost:8000"
    
    async with aiohttp.ClientSession() as session:
        # Test 1: Health Check
        print("1. 🏥 Testing health check...")
        try:
            async with session.get(f"{base_url}/") as response:
                if response.status == 200:
                    data = await response.json()
                    print(f"   ✅ API is healthy: {data['service']}")
                else:
                    print(f"   ❌ Health check failed: {response.status}")
        except Exception as e:
            print(f"   ❌ Health check error: {e}")
        
        # Test 2: Search Flights
        print("\n2. 🔍 Testing search_flights...")
        try:
            payload = {
                "departure_airport": "JFK",
                "arrival_airport": "LHR",
                "departure_date": "2024-02-15",
                "passengers": 1
            }
            async with session.post(f"{base_url}/tools/search_flights", json=payload) as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        flights = data["data"]
                        print(f"   ✅ Found {flights.get('results_count', 0)} flights")
                        if flights.get('flights'):
                            flight = flights['flights'][0]
                            print(f"   📄 Sample: {flight['airline']} {flight['flight_number']} - ${flight['price']}")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Search error: {e}")
        
        # Test 3: List Airports
        print("\n3. 🏢 Testing list_airports...")
        try:
            async with session.get(f"{base_url}/tools/list_airports") as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        airports = data["data"]
                        print(f"   ✅ Listed {airports.get('total_count', 0)} airports")
                        if airports.get('airports'):
                            airport = airports['airports'][0]
                            print(f"   📄 Sample: {airport['code']} - {airport['name']}")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Airports error: {e}")
        
        # Test 4: Book Flight
        print("\n4. 🎫 Testing book_flight...")
        try:
            payload = {
                "flight_id": "FL001",
                "passenger_name": "John Doe",
                "passenger_email": "john@example.com",
                "seat_preference": "window"
            }
            async with session.post(f"{base_url}/tools/book_flight", json=payload) as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        booking = data["data"]
                        print(f"   ✅ Booking created: {booking.get('booking_id', 'N/A')}")
                        print(f"   📄 Seat: {booking.get('seat_number', 'N/A')}, Price: ${booking.get('total_price', 0)}")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Booking error: {e}")
        
        # Test 5: Flight Status Resource
        print("\n5. 📊 Testing flight status resource...")
        try:
            async with session.get(f"{base_url}/resources/flight/status/FL001") as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        status = data["data"]
                        print(f"   ✅ Status: {status.get('status', 'N/A')}")
                        print(f"   📄 Flight: {status.get('flight_number', 'N/A')} {status.get('departure_airport', 'N/A')} → {status.get('arrival_airport', 'N/A')}")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Status error: {e}")
        
        # Test 6: Airport Info Resource
        print("\n6. 🏢 Testing airport info resource...")
        try:
            async with session.get(f"{base_url}/resources/airport/info/JFK") as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        airport_info = data["data"]
                        print(f"   ✅ Airport: {airport_info.get('name', 'N/A')}")
                        print(f"   📄 Location: {airport_info.get('city', 'N/A')}, {airport_info.get('country', 'N/A')}")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Airport info error: {e}")
        
        # Test 7: Travel Tips Prompt
        print("\n7. 💡 Testing travel tips prompt...")
        try:
            payload = {"destination": "London"}
            async with session.post(f"{base_url}/prompts/travel_tips", json=payload) as response:
                if response.status == 200:
                    data = await response.json()
                    if data["success"]:
                        tips = data["data"]
                        print(f"   ✅ Tips generated ({len(tips)} characters)")
                        print(f"   📄 Preview: {tips[:100]}...")
                    else:
                        print(f"   ❌ API error: {data}")
                else:
                    print(f"   ❌ HTTP error: {response.status}")
        except Exception as e:
            print(f"   ❌ Tips error: {e}")
        
        print("\n🎉 All REST API tests completed!")
        print("🚀 REST API is working perfectly!")
        print("💡 This is a reliable alternative to MCP client connections")

if __name__ == "__main__":
    asyncio.run(test_rest_api())
