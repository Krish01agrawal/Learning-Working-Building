# AI Agent from Scratch

A powerful research assistant AI agent built with LangChain that can search the web, query Wikipedia, and save research findings to files. This project demonstrates how to create a functional AI agent from scratch using modern Python libraries.

## 🚀 Features

- **Web Search**: Search the internet using DuckDuckGo for real-time information
- **Wikipedia Integration**: Query Wikipedia for detailed information on topics
- **Structured Output**: Get research results in a structured format with sources and tools used
- **File Saving**: Automatically save research findings to text files with timestamps
- **Conversational Interface**: Interactive command-line interface for research queries
- **Multiple AI Models**: Support for both OpenAI and Anthropic models

## 🛠️ Tech Stack

- **Python 3.8+**
- **LangChain**: Framework for building LLM-powered applications
- **Anthropic Claude**: Primary AI model (Claude 3.5 Sonnet)
- **OpenAI GPT**: Alternative AI model support
- **Pydantic**: Data validation and serialization
- **DuckDuckGo Search**: Web search functionality
- **Wikipedia API**: Encyclopedia data retrieval

## 📋 Prerequisites

- Python 3.8 or higher
- API keys for either:
  - Anthropic (Claude) - Recommended
  - OpenAI (GPT)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AiAgentFromScratch
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   ```bash
   cp sample.env .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   OPENAI_API_KEY="your-openai-api-key"
   ANTHROPIC_API_KEY="your-anthropic-api-key"
   ```

## 🎯 Usage

1. **Run the AI agent**
   ```bash
   python main.py
   ```

2. **Enter your research query**
   ```
   What can i help you research? Tell me about quantum computing
   ```

3. **Get structured results**
   The agent will:
   - Search the web for information
   - Query Wikipedia for additional details
   - Save findings to `research_output.txt`
   - Return structured data with sources and tools used

## 📁 Project Structure

```
AiAgentFromScratch/
├── main.py              # Main application entry point
├── tools.py             # Custom tools for search, Wikipedia, and file saving
├── requirements.txt     # Python dependencies
├── sample.env          # Environment variables template
├── .env                # Your actual environment variables (not in git)
├── research_output.txt # Generated research files (created during use)
└── README.md           # This file
```

## 🔧 Configuration

### AI Model Selection

The project is configured to use **Anthropic Claude 3.5 Sonnet** by default. To switch to OpenAI:

1. Edit `main.py` line 18:
   ```python
   # Change from:
   llm = ChatAnthropic(model="claude-3-5-sonnet-20241022")
   
   # To:
   llm = ChatOpenAI(model="gpt-4")
   ```

### Available Tools

The agent comes with three built-in tools:

1. **Web Search** (`search_tool`): Searches the internet using DuckDuckGo
2. **Wikipedia** (`wiki_tool`): Queries Wikipedia for detailed information
3. **File Save** (`save_tool`): Saves research findings to text files

## 📊 Output Format

The agent returns structured data in this format:

```python
class ResearchResponse(BaseModel):
    topic: str          # The research topic
    summary: str        # Summary of findings
    sources: list[str]  # List of sources used
    tools_used: list[str] # Tools that were utilized
```

## 🔒 Security

- Never commit your `.env` file (it's already in `.gitignore`)
- Keep your API keys secure and rotate them regularly
- The project uses environment variables for sensitive configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

1. **API Key Errors**: Ensure your API keys are correctly set in the `.env` file
2. **Import Errors**: Make sure all dependencies are installed with `pip install -r requirements.txt`
3. **Rate Limiting**: If you hit API rate limits, consider upgrading your API plan or adding delays

### Getting Help

- Check the [LangChain documentation](https://python.langchain.com/)
- Review the [Anthropic API docs](https://docs.anthropic.com/)
- Open an issue in this repository

## 🎉 Acknowledgments

- Built with [LangChain](https://python.langchain.com/)
- Powered by [Anthropic Claude](https://www.anthropic.com/)
- Web search via [DuckDuckGo](https://duckduckgo.com/)
- Wikipedia data from [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page)

---

**Happy Researching! 🧠🔍**