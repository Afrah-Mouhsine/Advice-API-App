# Advice API App 🌟🚀💡

### **Overview 🎯📢✨**
The Advice API App is a simple React-based web application that fetches random pieces of advice from the Advice Slip API and displays them to the user. Users can request new advice by clicking a button.
![Example](https://github.com/Afrah-Mouhsine/Advice-API-App/blob/main/AdviceGenerator/public/example.png)

## **Features 🛠️🔥📌**
- Fetches and displays a random piece of advice upon page load.
- Allows users to request new advice dynamically by clicking a button.
- Handles errors gracefully in case of network issues or API failures.
- Simple and responsive UI with a clean design.

## **Technologies Used ⚙️🖥️🛠**
- React: For building the interactive UI.
- JavaScript (ES6+): For asynchronous data fetching and state management.
- CSS: For styling the application.
- Fetch API: For making HTTP requests to the Advice Slip API.

## **Installation and Setup 📥⚡📂**

#### Prerequisites:
- Node.js installed
- Basic knowledge of React.

#### Steps:
1. Clone the repository:
   ```sh
   [git clone https://github.com/Afrah-Mouhsine/Advice-API-App
   cd Advice AdviceGenerator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open in the browser:
   ```
   http://localhost:3000
   ```
## **Project Structure 📂🏗️📌**
    AdviceAPI/
    │── src/
    │   │── components/
    │   │   ├── AdviceApi.js  # Main component fetching and displaying advice
    │   │── styles/
    │   │   ├── AdviceApi.css  # Styling for the component
    │── public/
    │── package.json
    │── README.md

## **How It Works 🤖📡🔄**

### 1.  **Fetching Advice:**
   - Uses **useEffect** to fetch a piece of advice when the component first loads.
   - Calls the Advice Slip API asynchronously using the **fetch** function.
     
### 2. **Displaying Advice:**
  - Shows the fetched advice in an **h3** tag.
  - Displays a loading message if the advice has not yet been retrieved.

### 3. **Handling Errors:**
  -If the **API** request fails, an error message is displayed instead of the advice.

### 4. **Getting New Advice:**
  - Clicking the "Get New Advice" button triggers a new API request to fetch and display fresh advice.

## **API Reference 🌍🔗📜**
- **Endpoint:**  ``` https://api.adviceslip.com/advice ```
- **Response Format:** ```
      {
      "slip": {
        "id": 123,
        "advice": "Always be kind to others."
      }
      } ```

## **Future Enhancements 🚀✨🔮**
- Add animations for smooth advice transitions.
- Implement a caching mechanism to avoid fetching the same advice repeatedly.
- Enhance the UI with more styling and themes.

### Contributors
- **Afrah Mouhsine** (GitHub Profile:Afrah-Mouhsine)

> Feel free to contribute by submitting issues and pull requests!
