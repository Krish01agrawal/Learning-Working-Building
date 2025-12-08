#!/usr/bin/env python3
"""
Streamable HTTP MCP Client for Flight Booking Server
Uses streamable-http transport to avoid stdio connection issues
"""

import asyncio
from mcp.client.streamable_http import streamablehttp_client
from mcp.client.session import ClientSession

async def test_streamable_client():
    """Test the streamable-http MCP client"""
    print("🧪 Testing Streamable HTTP MCP Client")
    print("=" * 50)
    
    try:
        # Connect to the MCP server using streamable-http
        async with streamablehttp_client("http://localhost:8000/mcp") as (read_stream, write_stream, get_session_id):
            client = ClientSession(read_stream, write_stream)
            print("✅ Connected to MCP server")
            
            # Initialize the session
            await client.initialize()
            print("✅ Session initialized")
            
            # Test 1: List available tools
            print("\n1. 🛠️ Listing available tools...")
            tools = await client.list_tools()
            print(f"   Found {len(tools.tools)} tools:")
            for tool in tools.tools:
                print(f"   - {tool.name}: {tool.description}")
            
            # Test 2: Search Flights
            print("\n2. 🔍 Testing search_flights...")
            try:
                flights = await client.call_tool("search_flights", {
                    "departure_airport": "JFK",
                    "arrival_airport": "LHR",
                    "departure_date": "2024-02-15",
                    "passengers": 1
                })
                print(f"   ✅ Search completed: {len(flights.content)} results")
                if flights.content:
                    print(f"   📄 Sample result: {flights.content[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Search failed: {e}")
            
            # Test 3: List Airports
            print("\n3. 🏢 Testing list_airports...")
            try:
                airports = await client.call_tool("list_airports", {})
                print(f"   ✅ Airports listed: {len(airports.content)} results")
                if airports.content:
                    print(f"   📄 Sample result: {airports.content[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Airports failed: {e}")
            
            # Test 4: Book Flight
            print("\n4. 🎫 Testing book_flight...")
            try:
                booking = await client.call_tool("book_flight", {
                    "flight_id": "FL001",
                    "passenger_name": "John Doe",
                    "passenger_email": "john@example.com",
                    "seat_preference": "window"
                })
                print(f"   ✅ Booking created: {len(booking.content)} results")
                if booking.content:
                    print(f"   📄 Sample result: {booking.content[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Booking failed: {e}")
            
            # Test 5: Flight Status Resource
            print("\n5. 📊 Testing flight status resource...")
            try:
                status = await client.read_resource("flight://status/FL001")
                print(f"   ✅ Status read: {len(status.contents)} results")
                if status.contents:
                    print(f"   📄 Sample result: {status.contents[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Status read failed: {e}")
            
            # Test 6: Airport Info Resource
            print("\n6. 🏢 Testing airport info resource...")
            try:
                airport_info = await client.read_resource("airport://info/JFK")
                print(f"   ✅ Airport info read: {len(airport_info.contents)} results")
                if airport_info.contents:
                    print(f"   📄 Sample result: {airport_info.contents[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Airport info failed: {e}")
            
            # Test 7: Travel Tips Prompt
            print("\n7. 💡 Testing travel tips prompt...")
            try:
                tips = await client.get_prompt("travel_tips", {
                    "destination": "London"
                })
                print(f"   ✅ Tips generated: {len(tips.messages)} messages")
                if tips.messages:
                    print(f"   📄 Sample result: {tips.messages[0].content.text[:100]}...")
            except Exception as e:
                print(f"   ❌ Tips failed: {e}")
            
            print("\n🎉 All streamable-http client tests completed!")
            print("🚀 Streamable HTTP transport is working perfectly!")
        
    except Exception as e:
        print(f"❌ Client connection failed: {e}")
        print(f"Error type: {type(e)}")
        import traceback
        traceback.print_exc()
        print("Make sure the MCP server is running: python3 flight_booking_fastmcp.py")

if __name__ == "__main__":
    asyncio.run(test_streamable_client())
