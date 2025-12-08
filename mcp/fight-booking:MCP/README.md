# 🛫 Flight Booking MCP Server

A clean, modern Model Context Protocol (MCP) server for flight booking operations using native FastMCP.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the Server
```bash
python3 flight_booking_fastmcp.py
```

### 3. Test the Server (in another terminal)
```bash
python3 client.py
```

## 📁 Project Structure

```
fight-booking:MCP/
├── flight_booking_fastmcp.py   # Main MCP server (FastMCP)
├── client.py                  # Native MCP client for testing
├── requirements.txt            # Dependencies
├── mcp_config.json            # MCP client configuration
└── README.md                  # This file
```

## 🛠️ Available Tools

- **`search_flights`** - Find flights between airports
- **`book_flight`** - Make flight reservations
- **`cancel_booking`** - Cancel existing bookings
- **`list_airports`** - Get available airports
- **`list_airlines`** - Get available airlines

## 📚 Available Resources

- **`flight://status/{flight_id}`** - Real-time flight status
- **`booking://details/{booking_id}`** - Booking information
- **`airport://info/{airport_code}`** - Airport details

## 💬 Available Prompts

- **`find_flight_suggestions`** - Generate flight recommendations
- **`booking_confirmation_template`** - Booking confirmation emails
- **`travel_tips`** - Destination travel advice

## 🌐 MCP Protocol

The server runs on `http://localhost:8080/mcp` using the native MCP protocol:

- **Tools**: Automatic discovery and type-safe calls
- **Resources**: URI-based data access
- **Prompts**: Template-based prompt generation
- **Type Safety**: Automatic validation and documentation

## 🧪 Testing

```bash
# Test with native MCP client
python3 client.py

# The client will automatically:
# - Connect to the MCP server
# - Discover available tools, resources, and prompts
# - Test all functionality with type safety
```

## 🔧 MCP Client Integration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "flight-booking": {
      "command": "python",
      "args": ["flight_booking_fastmcp.py"],
      "cwd": "/path/to/fight-booking:MCP"
    }
  }
}
```

## 📊 Sample Data

The server includes sample data for:
- **8 Airports**: JFK, LAX, LHR, CDG, NRT, SYD, DXB, SIN
- **12 Airlines**: American, Delta, United, British Airways, etc.
- **50 Sample Flights**: Randomly generated with realistic data

## 🎯 Features

- ✅ **Native MCP Protocol** - Pure MCP implementation
- ✅ **FastMCP Framework** - Modern, efficient server
- ✅ **Type Safety** - Automatic validation and discovery
- ✅ **Auto Documentation** - Built-in MCP documentation
- ✅ **Error Handling** - Robust error responses
- ✅ **Sample Data** - Ready to test immediately

## 🚨 Troubleshooting

**Port 8080 in use:**
```bash
lsof -ti:8080 | xargs kill -9
```

**Server not responding:**
```bash
# Check if running
ps aux | grep flight_booking_fastmcp

# Check port
netstat -an | grep 8080
```

## 📝 License

MIT License - Feel free to use and modify!