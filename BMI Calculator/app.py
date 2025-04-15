from flask import Flask, render_template, request, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

def calculate_bmi(weight, height):
    # Convert height from cm to m
    height_m = height / 100
    # Calculate BMI
    bmi = weight / (height_m ** 2)
    return round(bmi, 1)

def get_bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight", "text-primary"
    elif 18.5 <= bmi < 25:
        return "Normal Weight", "text-success"
    elif 25 <= bmi < 30:
        return "Overweight", "text-warning"
    else:
        return "Obese", "text-danger"

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    
    if request.method == 'POST':
        try:
            weight = float(request.form['weight'])
            height = float(request.form['height'])
            
            if weight <= 0 or height <= 0:
                flash('Please enter positive values for weight and height', 'danger')
                return redirect(url_for('index'))
                
            bmi = calculate_bmi(weight, height)
            category, category_class = get_bmi_category(bmi)
            
            result = {
                'bmi': bmi,
                'category': category,
                'category_class': category_class,
                'weight': weight,
                'height': height
            }
            
        except ValueError:
            flash('Please enter valid numbers for weight and height', 'danger')
            return redirect(url_for('index'))
    
    return render_template('index.html', result=result)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/health-tips')
def health_tips():
    return render_template('health_tips.html')

if __name__ == '__main__':
    app.run(debug=True)