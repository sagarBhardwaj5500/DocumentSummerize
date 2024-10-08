# Document Summarizer


The Document Summarizer is a web application that simplifies the process of extracting key points from lengthy documents. Users can upload their documents and receive concise summaries generated by a locally deployed BART language model.

The backend is powered by FastAPI, ensuring fast and efficient processing, while the frontend is built with React, providing a smooth and user-friendly experience. This tool is designed to help users quickly understand the essence of their documents, saving time and enhancing productivity.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features
- Upload documents for quick summarization
- Receive concise summaries powered by the BART model
- FastAPI backend ensures efficient processing
- React frontend offers a seamless user experience

## Technologies Used

### Frontend
- React
- Babel
- Webpack
- TailwindCSS

### Backend
- FastAPI
- Uvicorn
- Pydantic
- PyTorch
- Transformers (BART model)

## Installation

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/sagarBhardwaj5500/DocumentSummerize.git
    cd filesummarizer/frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. To build for production:
    ```bash
    npm run build
    ```

### Backend
1. Navigate to the backend directory:
    ```bash
    cd filesummarizer/backend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```bash
    pip install fastapi uvicorn pydantic torch transformers
    ```

4. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

## Usage
1. Start the backend server as described in the installation steps.
2. Start the frontend development server as described in the installation steps.
3. Open your browser and navigate to `http://localhost:3000` to use the application.
4. Upload a document and get a summarized version.


# Project Approach and Challenges
## Introduction
This project aims to develop a web application that enables users to upload documents and receive summarized versions using a locally deployed Language Model (LLM). The backend was implemented using FastAPI, the frontend with React, and the summarization feature was powered by a pre-trained BART model. Below is a detailed account of the approach taken, challenges encountered, and the solutions devised.

## Approach
### Backend Development
The backend was developed using FastAPI, chosen for its speed and simplicity in building APIs. The following steps were taken:

File Handling: Implemented endpoints for uploading files (/upload) and processing them (/summarize). Proper error handling was incorporated to manage various file types and potential upload errors.
LLM Integration: Integrated a pre-trained BART model to handle the summarization task. This required setting up the model locally, loading it into the backend, and ensuring it could efficiently process requests.
Concurrency Handling: Ensured that the backend could handle multiple concurrent requests without performance degradation.
## Frontend Development
The frontend was built using React to create a dynamic and responsive user interface:

File Upload Component: Developed a form that allows users to upload documents. The form interacts with the backend via API calls.
Summary Display: Implemented a component to display the summarized text returned from the backend, ensuring the interface is user-friendly and intuitive.

## LLM Deployment
Deploying the LLM locally involved:

Environment Setup: A local environment was configured using Docker, which facilitated the seamless deployment of the BART model.
Optimization: Worked on optimizing the model’s performance to ensure that it could generate summaries efficiently without excessive resource consumption.
Challenges Faced
1. Model Deployment and Performance
Deploying a large language model like BART locally posed significant challenges, particularly concerning system resource constraints. Ensuring that the model could run efficiently on local hardware required careful optimization and testing.

Solution: Implemented various optimizations such as model quantization and tweaking of batch processing to reduce memory usage while maintaining summary quality.

2. Handling Multiple File Types
Supporting various document formats (PDF, DOCX, TXT) was more complex than anticipated. Each file type required different handling procedures, and ensuring compatibility was challenging.

Solution: Utilized robust libraries like pdfplumber for PDF parsing and python-docx for DOCX files. Comprehensive testing was conducted to ensure the backend could handle all supported formats reliably.

3. Frontend and Backend Integration
Ensuring smooth communication between the React frontend and FastAPI backend was essential but occasionally tricky, particularly with asynchronous operations and error handling.

Solution: Employed Axios for making API calls and implemented extensive error handling on both the frontend and backend. Debugging tools were used to monitor and refine the interaction between the components.

4. Efficiency and Scalability
Balancing efficiency and scalability while running the LLM locally was a considerable hurdle. High latency during the summarization process could significantly affect user experience.

Solution: The application was optimized for performance by fine-tuning the backend’s concurrency model and utilizing caching where appropriate to reduce redundant processing.

# Conclusion
This project presented numerous challenges, from deploying a sophisticated language model locally to ensuring seamless interaction between the frontend and backend components. However, through persistent effort, extensive testing, and iterative optimization, these challenges were successfully overcome, resulting in a functional and efficient document summarization application.

# Future Improvements
Scalability: Explore deploying the LLM on cloud infrastructure to enhance scalability.
Model Enhancements: Experiment with other models or fine-tune BART for even better summarization performance.
UI/UX Improvements: Continue refining the user interface to improve user experience.
This project was a significant learning experience, requiring a deep dive into various technologies and problem-solving at multiple levels. The experience gained here will be invaluable in future projects.


##  Bibliography
- https://fastapi.tiangolo.com/#requirements
- https://medium.com/@ryver.dev/building-a-simple-ai-powered-text-summarizer-with-transformers-in-python-0a31c848e1d2
- https://medium.com/@kasongokakumbiguy/large-language-model-llm-into-your-react-app-adb4b05819f3
- https://youtu.be/RIWbalZ7sTo?si=4mPGCm_u-hbBIwZ9
- https://www.freecodecamp.org/news/how-to-build-a-text-summarizer-using-huggingface-transformers/
- https://huggingface.co/docs/transformers/en/model_doc/bert
