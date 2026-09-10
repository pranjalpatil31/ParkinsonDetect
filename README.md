# ParkinsonDetect

<p align="center">
  <img src="./frontend/src/Assets/log.png" alt="ParkinsonDetect Logo" width="100%"/>
</p>

<h1 align="center">ParkinsonDetect</h1>

<p align="center">
  <b>AI-Powered Parkinson's Disease Detection System</b>
</p>

<p align="center">
  A React-based web application that connects with a machine learning model through FastAPI to assist in predicting the presence of Parkinson's disease from voice-related clinical parameters.
</p>

---

## About the Project

**ParkinsonDetect** is a web-based machine learning application developed to assist in the detection of Parkinson's disease using voice-related biomedical features.

Parkinson's disease is a progressive neurodegenerative disorder that primarily affects movement and the nervous system. It is associated with the gradual loss of dopamine-producing neurons in a region of the brain called the substantia nigra.

The project uses a **Support Vector Classifier (SVC)** machine learning model to analyze input parameters and generate a prediction.

The trained machine learning model is integrated with a **FastAPI backend**, while the frontend is developed using **React.js** to provide an interactive and user-friendly interface.

> **Note:** ParkinsonDetect is an academic and research project. Its prediction should not be considered a medical diagnosis or a replacement for professional medical consultation.

---

## How ParkinsonDetect Works

The application follows a simple end-to-end workflow:

```text
User
  │
  ▼
ParkinsonDetect Web Application
  │
  ▼
Input Clinical / Voice Parameters
  │
  ▼
React Frontend
  │
  ▼
FastAPI Backend
  │
  ▼
SVC Machine Learning Model
  │
  ▼
Prediction
  │
  ▼
Result Dashboard
```

The user enters the required parameters through the ParkinsonDetect interface. The frontend sends these values to the FastAPI prediction endpoint. The backend processes the input using the trained SVC model and returns the prediction to the frontend.

---

## Key Features

* 🧠 Machine learning-based Parkinson's disease prediction
* 🎙️ Voice-related feature analysis
* ⚡ Real-time communication with the prediction API
* 🖥️ Interactive and responsive React interface
* 📊 Clear prediction result dashboard
* 🏥 Healthcare and hospital resource information
* 🔗 Navigation between different application sections
* ✅ Input validation
* 📱 Responsive design for different screen sizes
* 🔌 FastAPI backend integration

---

## Machine Learning Model

The prediction system uses a **Support Vector Classifier (SVC)** for classification.

The model takes biomedical voice measurements as input and predicts one of the following outcomes:

```text
Input Features
      ↓
Preprocessing
      ↓
SVC Model
      ↓
Prediction
      ↓
Parkinson's Disease / No Parkinson's Disease
```

The model is designed to classify whether the provided input pattern is associated with Parkinson's disease.

---

## Input Features

The prediction system uses voice-related biomedical parameters such as:

* MDVP:Fo(Hz)
* MDVP:Fhi(Hz)
* MDVP:Flo(Hz)
* MDVP:Jitter(%)
* MDVP:Jitter(Abs)
* MDVP:RAP
* MDVP:PPQ
* Jitter:DDP
* MDVP:Shimmer
* MDVP:Shimmer(dB)
* Shimmer:APQ3
* Shimmer:APQ5
* MDVP:APQ
* Shimmer:DDA
* NHR
* HNR
* RPDE
* DFA
* spread1
* spread2
* D2
* PPE

These features are derived from voice recordings and are commonly used in Parkinson's disease research datasets.

---

## Technology Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **React Router**
* **Redux**

### Backend

* **FastAPI**
* **Python**
* **Uvicorn**

### Machine Learning

* **Scikit-learn**
* **Support Vector Classifier (SVC)**
* **Pandas**
* **NumPy**

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

---

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Navigate to the project directory:

```bash
cd ParkinsonDetect
```

Install the required dependencies:

```bash
npm install
```

---

## Running the Frontend

Start the React development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

Open the URL in your browser to access **ParkinsonDetect**.

---

## Backend Integration

ParkinsonDetect communicates with a FastAPI backend for machine learning predictions.

During local development, the FastAPI backend can be accessed at:

```text
http://127.0.0.1:8000
```

FastAPI provides interactive API documentation at:

```text
http://127.0.0.1:8000/docs
```

The general communication flow is:

```text
React Frontend
      │
      │ HTTP Request
      ▼
FastAPI Backend
      │
      ▼
SVC Machine Learning Model
      │
      │ Prediction Response
      ▼
React Frontend
      │
      ▼
Result Dashboard
```

Make sure the FastAPI backend is running before using the prediction functionality.

---

## API Communication

The frontend sends the user's input parameters to the FastAPI backend through an HTTP request.

Example:

```text
POST /predict
```

The backend processes the received features and returns the prediction result.

The frontend then displays the result through the ParkinsonDetect result interface.

> The exact API endpoint may vary depending on the backend configuration.

---

## Available Scripts

### `npm start`

Runs the application in development mode.

```bash
npm start
```

### `npm test`

Runs the test suite.

```bash
npm test
```

### `npm run build`

Creates an optimized production build.

```bash
npm run build
```

The production files are generated inside:

```text
build/
```

---

## Production Build

To create the production version of ParkinsonDetect:

```bash
npm run build
```

The generated `build` directory can then be deployed to a suitable hosting platform.

For production deployment, make sure the frontend API configuration points to the deployed FastAPI backend instead of:

```text
http://127.0.0.1:8000
```

---

## Application Modules

### 🏠 Home

Introduces the ParkinsonDetect system and provides access to the main prediction functionality.

### 🔬 Prediction

Allows users to enter the required biomedical voice parameters.

### 📊 Results

Displays the prediction returned by the machine learning model in an easy-to-understand format.

### 🧠 Parkinson's Information

Provides general information about Parkinson's disease, its symptoms, and related information.

### 🏥 Healthcare Resources

Provides useful healthcare and hospital-related resources for users.

---

## Prediction Workflow

```text
1. Open ParkinsonDetect
          ↓
2. Navigate to Prediction
          ↓
3. Enter required voice parameters
          ↓
4. Submit the prediction form
          ↓
5. React sends data to FastAPI
          ↓
6. FastAPI processes the input
          ↓
7. SVC model generates prediction
          ↓
8. Result is returned to React
          ↓
9. Prediction result is displayed
```


---

## Future Improvements

Possible future enhancements include:

* Integration with additional machine learning models
* Model performance comparison
* Improved prediction analytics
* Voice recording and direct audio analysis
* Prediction history
* User authentication
* Enhanced healthcare resources
* Cloud-based deployment
* Improved accessibility and responsive design

---

## Disclaimer

**ParkinsonDetect is developed for educational and research purposes only.**

The predictions generated by this system are based on a machine learning model and should **not** be treated as a medical diagnosis.

Users should consult a qualified healthcare professional for medical evaluation, diagnosis, and treatment.

---

## Acknowledgements

This project is based on machine learning techniques for Parkinson's disease detection using voice-related biomedical features.

The frontend is developed using React.js and communicates with a FastAPI backend for prediction.

---

## License

This project is intended for **academic, educational, and research purposes**.
