# n8n Workflow Automation Repository

Welcome to the n8n Workflow Automation Repository! This repository contains a collection of automated workflows and agent-based solutions built using n8n, designed to streamline various business processes and data operations.

## 🚀 Overview

This repository serves as a comprehensive collection of n8n workflows and supporting tools for automation tasks. Each project within this repository is designed to solve specific business challenges through intelligent automation and data processing.

## 📁 Repository Structure

```
n8n/
├── README.md                    # This file - Main repository documentation
├── Links-DataScrapperAgent/           # Web scraping and link analysis automation
│   ├── README.md               # Project-specific documentation
│   ├── main.py                 # Python script for Excel template generation
│   ├── requirements.txt        # Python dependencies
│   ├── linkinfoscrap.json     # Main n8n workflow configuration
│   ├── back.json              # Backup workflow configuration
│   ├── input_links.xlsx       # Sample input data
│   ├── web-scrape-output.xlsx # Output data
│   └── venv/                  # Python virtual environment
└── [Future Projects]/         # Additional automation projects will be added here
```

## 🛠️ Technologies Used

- **n8n**: Workflow automation platform
- **Python**: Data processing and analysis
- **Pandas**: Data manipulation and Excel file handling
- **OpenPyXL**: Excel file operations
- **Web Scraping**: Automated data extraction from web sources

## 📋 Current Projects

### 1. Links-DataScrapperAgent
A comprehensive web scraping automation that processes URLs from Excel files, extracts metadata, and generates detailed reports.

**Key Features:**
- Automated URL processing from Excel input
- Web scraping and metadata extraction
- Data normalization and deduplication
- Excel output generation with comprehensive results

**Quick Start:**
```bash
cd Links-DataScrapperAgent
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

## 🚀 Getting Started

### Prerequisites

- **n8n**: Install n8n locally or use n8n Cloud
- **Python 3.8+**: For Python-based components
- **Node.js**: Required for n8n (if running locally)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd n8n
   ```

2. **Set up n8n:**
   ```bash
   npm install -g n8n
   n8n start
   ```

3. **Import workflows:**
   - Open n8n interface (usually `http://localhost:5678`)
   - Import the `.json` workflow files from each project folder
   - Configure credentials and file paths as needed

## 📖 Documentation

Each project contains its own detailed README.md file with:
- Project overview and purpose
- Setup instructions
- Configuration details
- Usage examples
- Troubleshooting guides

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for global settings:

```env
# n8n Configuration
N8N_HOST=localhost
N8N_PORT=5678
N8N_PROTOCOL=http

# File Paths
DATA_DIRECTORY=/path/to/your/data
OUTPUT_DIRECTORY=/path/to/output

# API Keys (if needed)
API_KEY=your_api_key_here
```

### Workflow Configuration

Each workflow can be customized by:
1. Modifying the JSON configuration files
2. Updating file paths in the workflow nodes
3. Adjusting parameters for specific use cases

## 🤖 Future Projects

This repository is designed to grow with additional automation projects:

- **Data Processing Agents**: Automated data transformation and analysis
- **API Integration Workflows**: Connecting various services and platforms
- **Monitoring and Alerting**: Automated system monitoring and notifications
- **Content Management**: Automated content creation and publishing
- **Business Process Automation**: Streamlining repetitive business tasks

## 📝 Contributing

### Adding New Projects

When adding a new automation project:

1. Create a new folder with a descriptive name
2. Include a comprehensive README.md
3. Add workflow JSON files
4. Include any supporting Python scripts
5. Update this main README.md with project details

### Project Structure Template

```
New-Project/
├── README.md              # Project documentation
├── workflow.json          # Main n8n workflow
├── config.json           # Configuration file (optional)
├── scripts/              # Supporting scripts
│   ├── setup.py         # Setup script
│   └── utils.py         # Utility functions
├── data/                 # Sample data files
├── output/               # Output directory
└── requirements.txt      # Dependencies (if applicable)
```

## 🐛 Troubleshooting

### Common Issues

1. **n8n Connection Issues:**
   - Ensure n8n is running on the correct port
   - Check firewall settings
   - Verify credentials are properly configured

2. **File Path Issues:**
   - Use absolute paths in workflow configurations
   - Ensure proper file permissions
   - Check that input files exist

3. **Python Environment Issues:**
   - Activate virtual environment before running scripts
   - Install all required dependencies
   - Check Python version compatibility

### Getting Help

- Check individual project README files for specific troubleshooting
- Review n8n documentation: https://docs.n8n.io/
- Open an issue in this repository for bugs or feature requests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- n8n team for the excellent automation platform
- Python community for robust data processing libraries
- Contributors and users who help improve these workflows

---

**Happy Automating! 🚀**

For questions or support, please open an issue in this repository or contact the maintainers.
