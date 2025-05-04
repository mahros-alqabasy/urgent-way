
# UrgentRoute UI/UX Design Prompt

Design a clean, responsive, and intuitive web interface for an application called **UrgentRoute**, a real-time nearest-hospital finder and route visualizer. The UI should visually communicate trust, clarity, and speed, suitable for healthcare and emergency contexts. The primary design language should be based on the *Healing Greens* color palette, including hex values `#B2E0B2`, `#8CCB8C`, `#5DAA5D`, `#3B8A3B`, and `#2A6A2A`. Use white backgrounds for contrast where necessary. Typography should feel professional and calming — use a font family similar to **Inter**, **DM Sans**, or **IBM Plex Sans**, balancing readability with visual polish. The interface should support location input, nearest hospital detection, and visual map rendering (e.g. Leaflet or Mapbox). Avoid visual clutter and favor minimalist iconography and layout spacing. This is a public health tool and must be easily usable by people under stress. Prioritize accessibility, large touch targets, and high color contrast. Include a responsive layout and mobile-friendly UI.

---

## App Context Prompt

UrgentRoute is a healthcare web tool that helps users instantly locate and navigate to the nearest hospital from their current position. The app combines geolocation, AI pathfinding, and real-world driving data to provide accurate routing. The user flow is simple: land on a homepage, allow location access, get the best hospital, view route, and optionally get info about ETA and hospital name. The entire app should focus on calm, helpful interaction with minimal user input. A success metric for the UI is “Can someone under medical distress figure this out in 10 seconds or less?”

---

## Screen-Specific Prompts

### 1. Home Screen
Design a home page with a centered call-to-action asking the user to allow location access to begin. It should include a reassuring welcome message, a clean white background, and soft green accent buttons. Place a secondary link to “See how it works” or “Manual Location Entry.” Include subtle animation (e.g. pulsing map marker icon) to indicate readiness.

### 2. Location Confirmation & Nearest Hospital Display
Once location is available, show a centered card or panel with the name of the nearest hospital, the distance, and estimated travel time. Display a small map preview. Use accent green for confirmation. Include a clear “View Route” button that scrolls or navigates the user to the route map section.

### 3. Route Visualization Screen
Design a full-width interactive map section (Leaflet or Mapbox). Overlay the route in a distinct green line (`#3B8A3B`) and highlight the user and hospital with soft markers. Use clear labels like “You” and “Nearest Hospital.” Add a small fixed banner or tooltip that shows live distance/duration info.

### 4. Error or No Hospital Found State
Create an elegant fallback screen that informs the user no nearby hospital could be found. Use neutral messaging, grayed-out visuals, and a button to retry or enter a new location.

### 5. Footer / Info Page
Add a minimal footer with brand mention, a link to privacy policy, and optionally “Powered by UrgentRoute” with a leaf icon or medical cross symbol.
