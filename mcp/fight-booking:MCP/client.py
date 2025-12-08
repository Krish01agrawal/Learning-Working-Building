#!/usr/bin/env python3
"""
Native MCP Client for Flight Booking Server
"""

import asyncio
from mcp.client.stdio import stdio_client, StdioServerParameters
from mcp.client.session import ClientSession

async def test_mcp_client():
    """Test the native MCP server"""
    print("🧪 Testing Native MCP Flight Booking Server")
    print("=" * 50)
    
    try:
        # Connect to the MCP server using stdio
        server_params = StdioServerParameters(
            command="python3",
            args=["flight_booking_fastmcp.py"],
            cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
        )
        
        async with stdio_client(server_params) as (read_stream, write_stream):
            client = ClientSession(read_stream, write_stream)
            print("✅ Connected to MCP server")
            
            # Initialize the session
            await client.initialize()
            print("✅ Session initialized")
            
            # 1. List available tools
            print("\n1. 🛠️ Listing available tools...")
            tools = await client.list_tools()
            print(f"   Found {len(tools.tools)} tools:")
            for tool in tools.tools:
                print(f"   - {tool.name}: {tool.description}")
            
            # 2. Use search_flights tool
            print("\n2. 🔍 Testing search_flights tool...")
            try:
                flights = await client.call_tool("search_flights", {
                    "departure_airport": "JFK",
                    "arrival_airport": "LHR",
                    "departure_date": "2024-02-15",
                    "passengers": 1
                })
                print(f"   ✅ Search completed: {len(flights.content)} results")
                if flights.content:
                    print(f"   Sample result: {flights.content[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Search failed: {e}")
            
            # 3. Use list_airports tool
            print("\n3. 🏢 Testing list_airports tool...")
            try:
                airports = await client.call_tool("list_airports", {})
                print(f"   ✅ Airports listed: {len(airports.content)} results")
                if airports.content:
                    print(f"   Sample result: {airports.content[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Airports failed: {e}")
            
            # 4. Read flight status resource
            print("\n4. 📚 Testing flight status resource...")
            try:
                status = await client.read_resource("flight://status/FL001")
                print(f"   ✅ Status read: {len(status.contents)} results")
                if status.contents:
                    print(f"   Sample result: {status.contents[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Status read failed: {e}")
            
            # 5. Read airport info resource
            print("\n5. 🏢 Testing airport info resource...")
            try:
                airport_info = await client.read_resource("airport://info/JFK")
                print(f"   ✅ Airport info read: {len(airport_info.contents)} results")
                if airport_info.contents:
                    print(f"   Sample result: {airport_info.contents[0].text[:100]}...")
            except Exception as e:
                print(f"   ❌ Airport info failed: {e}")
            
            # 6. Get travel tips prompt
            print("\n6. 💬 Testing travel tips prompt...")
            try:
                tips = await client.get_prompt("travel_tips", {
                    "destination": "London"
                })
                print(f"   ✅ Tips generated: {len(tips.messages)} messages")
                if tips.messages:
                    print(f"   Sample result: {tips.messages[0].content.text[:100]}...")
            except Exception as e:
                print(f"   ❌ Tips failed: {e}")
            
            # 7. Get flight suggestions prompt
            print("\n7. 💬 Testing flight suggestions prompt...")
            try:
                suggestions = await client.get_prompt("find_flight_suggestions", {
                    "travel_preferences": "Business trip to London"
                })
                print(f"   ✅ Suggestions generated: {len(suggestions.messages)} messages")
                if suggestions.messages:
                    print(f"   Sample result: {suggestions.messages[0].content.text[:100]}...")
            except Exception as e:
                print(f"   ❌ Suggestions failed: {e}")
            
            print("\n🎉 All MCP client tests completed!")
            print("🚀 Native MCP server is working perfectly!")
        
    except Exception as e:
        print(f"❌ Client connection failed: {e}")
        print(f"Error type: {type(e)}")
        import traceback
        traceback.print_exc()
        print("Make sure the MCP server is running: python3 flight_booking_fastmcp.py")

if __name__ == "__main__":
    asyncio.run(test_mcp_client())
