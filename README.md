# BMI Calculator Web Application 🧮

A beautiful, responsive web application built with Flask that calculates Body Mass Index (BMI) and provides health insights based on the results.

![main-dashboard](main-dashboard.png "main-dashboard")

## ✨ Features

- **Intuitive Interface**: Clean, modern UI that works seamlessly across all devices
- **Instant BMI Calculation**: Uses the standard formula `BMI = weight(kg) / height²(m²)`
- **Health Categories**: Categorizes results as underweight, normal, overweight, or obese
- **Personalized Tips**: Provides customized health recommendations based on BMI results
- **Educational Content**: Includes information about BMI, its significance, and limitations
- **Form Validation**: Ensures users enter valid numerical values

## 📱 Screenshots

### Main Calculator
![Calculator Interface](calculator-interface.png "BMI Calculator Form")

### Results Display
![Results Screen](results-screen.png "BMI Results with Category")

### Health Tips
![Health Tips](health-tips.png "Personalized Health Recommendations")

## 🔧 Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5, Font Awesome
- **Templating**: Jinja2

## 📁 Project Structure

```
bmi-calculator/
├── app.py                  # Main Flask application
├── static/                 # Static files
│   ├── css/
│   │   └── style.css       # Custom CSS styles
│   ├── img/                # Images
│   │   ├── bmi-banner.png
│   │   ├── bmi-chart.png
│   │   └── bmi-formula.png
│   └── js/
│       └── script.js       # JavaScript functionality
├── templates/              # HTML templates
│   ├── base.html           # Base template with layout
│   ├── index.html          # Home page with BMI calculator
│   ├── about.html          # About page with BMI information
│   └── health_tips.html    # Health tips based on BMI categories
└── README.md               # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.6+
- pip package manager

### Step 1: Clone the repository
```bash
git clone https://github.com/yourusername/bmi-calculator.git
cd bmi-calculator
```

### Step 2: Set up a virtual environment (optional but recommended)
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Step 3: Install required packages
```bash
pip install flask
```

### Step 4: Run the application
```bash
python app.py
```

### Step 5: Access the application
Open your web browser and navigate to:
```
http://127.0.0.1:5000/
```

## 🖥️ Usage

1. Enter your height in centimeters
2. Enter your weight in kilograms
3. Click the "Calculate BMI" button
4. View your BMI result and health category
5. Check out personalized health recommendations

![How to Use](/api/placeholder/700/350 "Step-by-step BMI calculation")

## 🧠 Learning Outcomes

This project demonstrates:
- **Flask Routing**: Using `@app.route` to define web page paths
- **Form Data Handling**: Accessing user input via `request.form` in Flask
- **Template Rendering**: Displaying dynamic content using `render_template()` with Jinja2
- **Frontend Styling**: Using Bootstrap and custom CSS for a responsive layout
- **Full-Stack Development**: Combining Python backend with HTML/CSS/JS frontend
- **Error Handling**: Implementing form validation and user feedback

## 📝 Future Enhancements

- **User Accounts**: Track BMI history over time
- **Data Visualization**: Graphical representation of BMI trends
- **Additional Metrics**: Body fat percentage, waist-to-hip ratio
- **Personalized Plans**: Customized workout and meal plans based on BMI and goals
- **Mobile App**: Native application versions for iOS and Android

## 🐛 Troubleshooting

- **Port already in use**: Change the port in app.py from 5000 to another number
- **Missing modules**: Ensure all dependencies are installed with `pip install flask`
- **Display issues**: Make sure you're using a modern browser with JavaScript enabled

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgements

- [Bootstrap](https://getbootstrap.com/) for the responsive UI components
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Flask Documentation](https://flask.palletsprojects.com/) and community

---

<p align="center">Created with ❤️ as a beginner Flask project</p>
