# 🌿 RuralHealth Multi-Agent AI
> **Bridging the digital divide by connecting rural patients with localized AI diagnostics, government healthcare resources, and real-time transit logistics.**

---

## 📖 Project Vision
In rural areas, healthcare access is hindered by a lack of specialized information and the logistical complexity of reaching distant facilities. **RuralHealth Multi-Agent AI** is a specialized dashboard that doesn't just provide medical advice—it coordinates a complete patient journey from the first symptom to the hospital doorstep.

---

## ⚙️ Functional Flow (The "Agentic" Journey)

The system operates through a structured, three-tier agent architecture designed to handle a patient's journey sequentially:

### **1. Input & Intent Layer**
* **Voice/Text Ingestion:** The user enters symptoms (e.g., "stomach pain") and their location (e.g., "Hyderabad").
* **Orchestration:** The system initializes the **Multi-Agent Pipeline**, ensuring all agents share the same patient context.

### **2. The Intelligence Layer (The Agents)**
* **🧑‍💻 Patient Agent (Accessibility):** * Translates medical jargon into simple, supportive advice.
    * **Function:** Generates "Audio Advice" to assist users with varying literacy levels.
* **🩺 Doctor Agent (Clinical Readiness):** * Analyzes symptoms to suggest potential conditions (Differential Diagnosis).
    * **Function:** Prepares a structured "Specialist Prep List" for the patient to show a real doctor.
* **🏥 Health Worker Agent (Logistics):** * The "bridge" to the physical world. 
    * **Function:** Triggers a geospatial search filtered strictly for **Government Hospitals (PHCs/CHCs)** to ensure care is affordable and public.

### **3. The Action Layer (Maps & Logistics)**
* **Geospatial Mapping:** Visualizes the nearest public facilities on an interactive map.
* **Real-time Logistics:** Calculates travel time, identifies specific bus/transit numbers, and provides the "Next Bus" timing to ensure the patient can actually reach the facility.

---

## 🛠️ Tech Stack

### **AI & Models**
* **Amazon Nova (2 Lite & 2 Sonic):** Powers the reasoning and low-latency voice interactions.
* **Amazon Bedrock:** Platform for deploying and scaling the foundation models.

### **Full-Stack Development**
* **Frontend:** React.js, Tailwind CSS (Nature-inspired UI).
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB Atlas (For session history and facility metadata).

### **APIs & Tools**
* **Google Maps Platform:** Places API (Facility Search) & Routes API (Navigation).
* **Web Speech API:** Powering the real-time audio playback for patient advice.

---

## 🚀 Key Features
* **Government-First Filtering:** Programmatically prioritizes public healthcare over private clinics.
* **Multi-Agent Context Sharing:** Agents work in parallel to provide a 360-degree solution (Diagnosis + Prep + Travel).
* **Low-Literacy Support:** High emphasis on audio-visual cues and simplified language.

---

## 📈 What’s Next?
* **Multilingual Voice Support:** Expanding beyond English to regional languages (Telugu, Hindi, Kannada).
* **Offline First:** Implementing Service Workers to allow cached maps and advice to work without an internet connection.
* **ASHA Integration:** A dedicated portal for rural health workers to track community health trends.

---
