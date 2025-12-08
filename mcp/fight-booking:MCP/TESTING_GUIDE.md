# 🧪 Flight Booking MCP Server - Testing Guide

## Current Status ✅
- **Server**: `flight_booking_fastmcp.py` is running on stdio transport
- **Client**: `client.py` is connected and ready to test

## 🚀 How to Test the System

### Method 1: Interactive Testing (Recommended)

Since your client is already running, you can interact with it directly. The client will automatically test all features:

1. **Let the client complete its full test suite** - it will test:
   - ✅ Tools (search_flights, book_flight, cancel_booking, list_airports, list_airlines)
   - ✅ Resources (flight status, booking details, airport info)
   - ✅ Prompts (flight suggestions, booking confirmation, travel tips)

2. **Watch the output** - you'll see results like:
   ```
   🧪 Testing Native MCP Flight Booking Server
   ==================================================
   ✅ Connected to MCP server
   ✅ Session initialized
   
   1. 🛠️ Listing available tools...
      Found 5 tools:
      - search_flights: Search for available flights...
      - book_flight: Book a specific flight...
      - cancel_booking: Cancel a flight booking...
      - list_airports: List all available airports...
      - list_airlines: List all available airlines...
   
   2. 🔍 Testing search_flights tool...
      ✅ Search completed: 3 results
      Sample result: {"id": "FL001", "airline": "American Airlines"...
   ```

### Method 2: Manual Testing Commands

If you want to test individual features, you can modify the client or create new test scripts:

#### Test Individual Tools:
```python
# Test flight search
flights = await client.call_tool("search_flights", {
    "departure_airport": "JFK",
    "arrival_airport": "LHR",
    "departure_date": "2024-02-15",
    "passengers": 1
})

# Test booking
booking = await client.call_tool("book_flight", {
    "flight_id": "FL001",
    "passenger_name": "John Doe",
    "passenger_email": "john@example.com"
})

# Test airport listing
airports = await client.call_tool("list_airports", {})
```

#### Test Resources:
```python
# Test flight status
status = await client.read_resource("flight://status/FL001")

# Test airport info
airport_info = await client.read_resource("airport://info/JFK")

# Test booking details
booking_details = await client.read_resource("booking://details/BK0001")
```

#### Test Prompts:
```python
# Test flight suggestions
suggestions = await client.get_prompt("find_flight_suggestions", {
    "travel_preferences": "Business trip to London"
})

# Test travel tips
tips = await client.get_prompt("travel_tips", {
    "destination": "London"
})
```

## 🎯 Expected Test Results

### ✅ Tools Should Return:
1. **search_flights**: List of available flights with prices, times, airlines
2. **book_flight**: Booking confirmation with booking ID and seat number
3. **cancel_booking**: Cancellation confirmation with refund amount
4. **list_airports**: All 8 airports (JFK, LAX, LHR, CDG, NRT, SYD, DXB, SIN)
5. **list_airlines**: All 12 airlines (American, Delta, United, etc.)

### ✅ Resources Should Return:
1. **flight://status/{id}**: Real-time flight status (on_time, delayed, boarding, etc.)
2. **booking://details/{id}**: Complete booking information
3. **airport://info/{code}**: Airport details with terminals, runways, timezone

### ✅ Prompts Should Return:
1. **find_flight_suggestions**: Formatted flight recommendations
2. **booking_confirmation_template**: Professional booking confirmation
3. **travel_tips**: Destination-specific travel advice

## 🔧 Troubleshooting

### If Client Gets Stuck:
1. **Press Ctrl+C** to stop the client
2. **Restart the client**: `python3 client.py`
3. **Check server is still running** in the other terminal

### If You See Errors:
- **Connection errors**: Make sure server is running
- **Tool errors**: Check parameter format (airport codes should be uppercase)
- **Resource errors**: Use valid IDs (FL001, BK0001, JFK, etc.)

## 🎉 Success Indicators

You'll know the system is working when you see:
- ✅ Green checkmarks for each test
- 📊 Sample data in results
- 🚀 "All MCP client tests completed!" message
- 🎯 "Native MCP server is working perfectly!" message

## 📝 Next Steps After Testing

Once testing is complete, you can:
1. **Integrate with AI models** using the MCP protocol
2. **Add more features** to the server
3. **Deploy to production** environments
4. **Create custom clients** for specific use cases

---

**Ready to test?** Just let the client run its full test suite and watch the results! 🚀
