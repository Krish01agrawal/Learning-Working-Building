# Project Templates and Guidelines

This document provides templates and guidelines for creating new automation projects in this repository. Use these templates to ensure consistency and completeness across all projects.

## 📁 Project Structure Template

### Standard Project Structure
```
Project-Name/
├── README.md                    # Main project documentation
├── workflow.json               # Primary n8n workflow
├── workflow-backup.json        # Backup workflow (optional)
├── config.json                 # Configuration file
├── scripts/                    # Supporting scripts
│   ├── __init__.py            # Python package init
│   ├── setup.py               # Setup and initialization
│   ├── utils.py                # Utility functions
│   ├── processors.py           # Data processing
│   └── validators.py           # Data validation
├── data/                       # Data files
│   ├── input/                 # Input data examples
│   │   ├── sample_input.xlsx  # Sample input file
│   │   └── templates/         # Data templates
│   ├── output/                # Output examples
│   │   ├── sample_output.xlsx # Sample output
│   │   └── schemas/           # Data schemas
│   └── test/                  # Test data
├── tests/                      # Test files
│   ├── test_workflow.py       # Workflow tests
│   ├── test_processors.py     # Processor tests
│   └── fixtures/              # Test fixtures
├── docs/                       # Additional documentation
│   ├── api.md                 # API documentation
│   ├── troubleshooting.md     # Troubleshooting guide
│   └── examples.md            # Usage examples
├── requirements.txt           # Python dependencies
├── package.json               # Node.js dependencies (if needed)
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
└── LICENSE                    # Project license
```

## 📝 README Template

### Complete README Template
```markdown
# [Project Name]: [Brief Description]

[One-line description of what this project does]

## 🎯 Overview

[Detailed description of the project's purpose, goals, and use cases]

## ✨ Features

- **Feature 1**: Description of feature
- **Feature 2**: Description of feature
- **Feature 3**: Description of feature

## 🚀 Quick Start

### Prerequisites
- [Prerequisite 1]
- [Prerequisite 2]
- [Prerequisite 3]

### Installation
```bash
# Step 1
# Step 2
# Step 3
```

### Basic Usage
```bash
# Example command
# Expected output
```

## 📋 Detailed Usage

### Configuration
[Configuration details and options]

### Input Format
[Description of input data format]

### Output Format
[Description of output data format]

### Advanced Features
[Advanced usage scenarios]

## 🔧 Configuration

### Environment Variables
```env
# Copy from .env.example and customize
VARIABLE_NAME=value
```

### Workflow Settings
[Workflow-specific configuration]

### Customization Options
[How to customize the workflow]

## 📊 Examples

### Example 1: [Scenario Name]
```bash
# Command or configuration
```

### Example 2: [Scenario Name]
```bash
# Command or configuration
```

## 🐛 Troubleshooting

### Common Issues

#### Issue 1: [Error Description]
**Problem**: [Description of the problem]
**Solution**: [Step-by-step solution]

#### Issue 2: [Error Description]
**Problem**: [Description of the problem]
**Solution**: [Step-by-step solution]

### Performance Optimization
[Performance tips and optimization strategies]

### Debugging
[Debugging techniques and tools]

## 📈 Extending the Project

### Adding New Features
[How to add new features]

### Integration with Other Tools
[Integration possibilities]

### Custom Development
[Custom development guidelines]

## 🧪 Testing

### Running Tests
```bash
# Test commands
```

### Test Coverage
[Test coverage information]

### Adding Tests
[How to add new tests]

## 📚 API Documentation

### Endpoints
[API endpoint documentation]

### Authentication
[Authentication methods]

### Rate Limits
[Rate limiting information]

## 🤝 Contributing

[Contribution guidelines specific to this project]

## 📄 License

[License information]

## 🙏 Acknowledgments

[Acknowledgments and credits]
```

## 🔧 Configuration Templates

### config.json Template
```json
{
  "project": {
    "name": "Project Name",
    "version": "1.0.0",
    "description": "Project description"
  },
  "workflow": {
    "trigger": "manual",
    "timeout": 300,
    "retries": 3
  },
  "data": {
    "input_format": "xlsx",
    "output_format": "xlsx",
    "batch_size": 100
  },
  "api": {
    "rate_limit": 100,
    "timeout": 30,
    "retry_attempts": 3
  },
  "logging": {
    "level": "INFO",
    "file": "logs/workflow.log"
  }
}
```

### .env.example Template
```env
# Project Configuration
PROJECT_NAME=Project Name
PROJECT_VERSION=1.0.0

# API Configuration
API_KEY=your_api_key_here
API_BASE_URL=https://api.example.com
API_TIMEOUT=30

# Database Configuration (if applicable)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=project_db
DB_USER=username
DB_PASSWORD=password

# File Paths
INPUT_DIRECTORY=/path/to/input
OUTPUT_DIRECTORY=/path/to/output
TEMP_DIRECTORY=/path/to/temp

# Logging
LOG_LEVEL=INFO
LOG_FILE=logs/project.log

# Workflow Settings
WORKFLOW_TIMEOUT=300
MAX_RETRIES=3
BATCH_SIZE=100
```

## 🐍 Python Script Templates

### Main Script Template
```python
#!/usr/bin/env python3
"""
[Script Name]: [Brief Description]

This script [detailed description of functionality].
Author: [Your Name]
Version: [Version Number]
"""

import argparse
import logging
import sys
from pathlib import Path
from typing import List, Dict, Any, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/script.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

class ProjectProcessor:
    """Main processor class for the project."""
    
    def __init__(self, config: Dict[str, Any]):
        """Initialize the processor with configuration."""
        self.config = config
        self.logger = logging.getLogger(f"{__name__}.{self.__class__.__name__}")
    
    def process(self, input_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Process input data and return results."""
        try:
            self.logger.info(f"Processing {len(input_data)} items")
            # Your processing logic here
            results = []
            for item in input_data:
                processed_item = self._process_item(item)
                results.append(processed_item)
            
            self.logger.info(f"Successfully processed {len(results)} items")
            return results
            
        except Exception as e:
            self.logger.error(f"Error processing data: {e}")
            raise
    
    def _process_item(self, item: Dict[str, Any]) -> Dict[str, Any]:
        """Process a single item."""
        # Your item processing logic here
        return item

def load_config(config_path: str) -> Dict[str, Any]:
    """Load configuration from file."""
    import json
    with open(config_path, 'r') as f:
        return json.load(f)

def main():
    """Main function."""
    parser = argparse.ArgumentParser(description='[Script Description]')
    parser.add_argument('--config', required=True, help='Configuration file path')
    parser.add_argument('--input', required=True, help='Input file path')
    parser.add_argument('--output', required=True, help='Output file path')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose logging')
    
    args = parser.parse_args()
    
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)
    
    try:
        # Load configuration
        config = load_config(args.config)
        
        # Initialize processor
        processor = ProjectProcessor(config)
        
        # Load input data
        # Your data loading logic here
        
        # Process data
        results = processor.process(input_data)
        
        # Save results
        # Your data saving logic here
        
        logger.info("Script completed successfully")
        
    except Exception as e:
        logger.error(f"Script failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
```

### Utility Functions Template
```python
"""
Utility functions for [Project Name].

This module contains utility functions used across the project.
"""

import re
import json
from typing import Any, Dict, List, Optional, Union
from pathlib import Path

def validate_input(data: Any) -> bool:
    """Validate input data."""
    # Your validation logic here
    return True

def normalize_data(data: Dict[str, Any]) -> Dict[str, Any]:
    """Normalize data format."""
    # Your normalization logic here
    return data

def save_json(data: Any, file_path: Union[str, Path]) -> None:
    """Save data to JSON file."""
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)

def load_json(file_path: Union[str, Path]) -> Any:
    """Load data from JSON file."""
    with open(file_path, 'r') as f:
        return json.load(f)

def clean_string(text: str) -> str:
    """Clean and normalize string."""
    if not text:
        return ""
    return re.sub(r'\s+', ' ', text.strip())
```

## 🧪 Testing Templates

### Test File Template
```python
"""
Tests for [Project Name].

This module contains tests for the project components.
"""

import unittest
import tempfile
import json
from pathlib import Path
from unittest.mock import Mock, patch

from scripts.processors import ProjectProcessor
from scripts.utils import validate_input, normalize_data

class TestProjectProcessor(unittest.TestCase):
    """Test cases for ProjectProcessor."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.config = {
            "batch_size": 10,
            "timeout": 30
        }
        self.processor = ProjectProcessor(self.config)
    
    def test_process_empty_data(self):
        """Test processing empty data."""
        result = self.processor.process([])
        self.assertEqual(result, [])
    
    def test_process_valid_data(self):
        """Test processing valid data."""
        input_data = [{"id": 1, "name": "test"}]
        result = self.processor.process(input_data)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["id"], 1)
    
    def test_process_invalid_data(self):
        """Test processing invalid data."""
        with self.assertRaises(ValueError):
            self.processor.process([{"invalid": "data"}])

class TestUtils(unittest.TestCase):
    """Test cases for utility functions."""
    
    def test_validate_input_valid(self):
        """Test input validation with valid data."""
        self.assertTrue(validate_input({"valid": "data"}))
    
    def test_validate_input_invalid(self):
        """Test input validation with invalid data."""
        self.assertFalse(validate_input(None))
    
    def test_normalize_data(self):
        """Test data normalization."""
        input_data = {"key": "  value  "}
        result = normalize_data(input_data)
        self.assertEqual(result["key"], "value")

if __name__ == "__main__":
    unittest.main()
```

## 📊 Workflow Node Templates

### Common n8n Node Configurations

#### HTTP Request Node
```json
{
  "parameters": {
    "url": "={{ $json.api_url }}",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer {{ $credentials.api_key }}",
      "Content-Type": "application/json"
    },
    "timeout": 30000,
    "retry": {
      "enabled": true,
      "maxAttempts": 3
    }
  }
}
```

#### Data Processing Function Node
```javascript
// Process and transform data
return items.map(item => {
  const data = item.json;
  
  // Your processing logic here
  const processedData = {
    id: data.id,
    processed_at: new Date().toISOString(),
    // Add processed fields
  };
  
  return {
    json: processedData,
    binary: item.binary
  };
});
```

#### Error Handling Node
```json
{
  "parameters": {
    "conditions": {
      "options": {
        "caseSensitive": true,
        "leftValue": "",
        "typeValidation": "strict"
      },
      "conditions": [
        {
          "id": "error_condition",
          "leftValue": "={{ $json.error }}",
          "rightValue": "",
          "operator": {
            "type": "string",
            "operation": "notEmpty"
          }
        }
      ],
      "combinator": "and"
    },
    "options": {}
  }
}
```

## 📋 Checklist for New Projects

### Pre-Development
- [ ] Define project requirements and scope
- [ ] Choose appropriate technologies
- [ ] Design workflow architecture
- [ ] Plan data flow and processing

### Development
- [ ] Create project structure
- [ ] Implement core functionality
- [ ] Add error handling
- [ ] Write comprehensive tests
- [ ] Create configuration files

### Documentation
- [ ] Write detailed README.md
- [ ] Add API documentation
- [ ] Create troubleshooting guide
- [ ] Add usage examples
- [ ] Document configuration options

### Testing
- [ ] Test with sample data
- [ ] Verify error handling
- [ ] Performance testing
- [ ] Integration testing
- [ ] User acceptance testing

### Deployment
- [ ] Create deployment scripts
- [ ] Set up monitoring
- [ ] Configure logging
- [ ] Test deployment process
- [ ] Create rollback procedures

---

Use these templates as starting points for your projects, customizing them as needed for your specific requirements.
