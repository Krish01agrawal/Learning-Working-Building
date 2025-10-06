#!/usr/bin/env python3
"""
Interactive MCP Testing Script
Run individual tests one by one
"""

import asyncio
from mcp.client.stdio import stdio_client, StdioServerParameters
from mcp.client.session import ClientSession

async def test_search_flights():
    """Test flight search functionality"""
    print("🔍 Testing Flight Search...")
    
    server_params = StdioServerParameters(
        command="python3",
        args=["flight_booking_fastmcp.py"],
        cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
    )
    
    async with stdio_client(server_params) as (read_stream, write_stream):
        client = ClientSession(read_stream, write_stream)
        await client.initialize()
        
        # Test search from JFK to LHR
        flights = await client.call_tool("search_flights", {
            "departure_airport": "JFK",
            "arrival_airport": "LHR",
            "departure_date": "2024-02-15",
            "passengers": 1
        })
        
        print(f"✅ Found {len(flights.content)} flights")
        if flights.content:
            print(f"📄 Sample result: {flights.content[0].text[:200]}...")
        
        return flights.content[0].text if flights.content else None

async def test_booking():
    """Test flight booking functionality"""
    print("🎫 Testing Flight Booking...")
    
    server_params = StdioServerParameters(
        command="python3",
        args=["flight_booking_fastmcp.py"],
        cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
    )
    
    async with stdio_client(server_params) as (read_stream, write_stream):
        client = ClientSession(read_stream, write_stream)
        await client.initialize()
        
        # Book a flight
        booking = await client.call_tool("book_flight", {
            "flight_id": "FL001",
            "passenger_name": "John Doe",
            "passenger_email": "john@example.com",
            "seat_preference": "window"
        })
        
        print(f"✅ Booking created")
        if booking.content:
            print(f"📄 Booking details: {booking.content[0].text[:200]}...")
        
        return booking.content[0].text if booking.content else None

async def test_airport_info():
    """Test airport information resource"""
    print("🏢 Testing Airport Information...")
    
    server_params = StdioServerParameters(
        command="python3",
        args=["flight_booking_fastmcp.py"],
        cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
    )
    
    async with stdio_client(server_params) as (read_stream, write_stream):
        client = ClientSession(read_stream, write_stream)
        await client.initialize()
        
        # Get JFK airport info
        airport_info = await client.read_resource("airport://info/JFK")
        
        print(f"✅ Airport info retrieved")
        if airport_info.contents:
            print(f"📄 Airport details: {airport_info.contents[0].text[:200]}...")
        
        return airport_info.contents[0].text if airport_info.contents else None

async def test_travel_tips():
    """Test travel tips prompt"""
    print("💡 Testing Travel Tips...")
    
    server_params = StdioServerParameters(
        command="python3",
        args=["flight_booking_fastmcp.py"],
        cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
    )
    
    async with stdio_client(server_params) as (read_stream, write_stream):
        client = ClientSession(read_stream, write_stream)
        await client.initialize()
        
        # Get travel tips for London
        tips = await client.get_prompt("travel_tips", {
            "destination": "London"
        })
        
        print(f"✅ Travel tips generated")
        if tips.messages:
            print(f"📄 Tips preview: {tips.messages[0].content.text[:200]}...")
        
        return tips.messages[0].content.text if tips.messages else None

async def main():
    """Run all interactive tests"""
    print("🧪 Interactive MCP Testing")
    print("=" * 40)
    
    try:
        # Test 1: Flight Search
        await test_search_flights()
        print()
        
        # Test 2: Flight Booking
        await test_booking()
        print()
        
        # Test 3: Airport Information
        await test_airport_info()
        print()
        
        # Test 4: Travel Tips
        await test_travel_tips()
        print()
        
        print("🎉 All interactive tests completed successfully!")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")

if __name__ == "__main__":
    asyncio.run(main())
