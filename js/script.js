document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(event) {
            const weight = document.getElementById('weight').value;
            const height = document.getElementById('height').value;
            
            if (weight <= 0 || height <= 0) {
                event.preventDefault();
                showAlert('Please enter positive values for weight and height', 'danger');
            }
        });
    }
    
    // Auto-dismiss alerts after 5 seconds
    setTimeout(function() {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(function(alert) {
            // Create a Bootstrap alert instance
            const bsAlert = new bootstrap.Alert(alert);
            // Close the alert
            bsAlert.close();
        });
    }, 5000);
    
    // Result animation
    const resultSection = document.querySelector('.bmi-result');
    if (resultSection) {
        resultSection.classList.add('animate__animated', 'animate__fadeIn');
    }
    
    // BMI Tab functionality
    const bmiTabs = document.getElementById('bmiTabs');
    if (bmiTabs) {
        const triggerTabList = [].slice.call(bmiTabs.querySelectorAll('button'));
        triggerTabList.forEach(function(triggerEl) {
            const tabTrigger = new bootstrap.Tab(triggerEl);
            
            triggerEl.addEventListener('click', function(event) {
                event.preventDefault();
                tabTrigger.show();
            });
        });
    }
});

// Function to show alert messages
function showAlert(message, type) {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type} alert-dismissible fade show`;
    alertContainer.role = 'alert';
    
    alertContainer.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.container');
    container.insertBefore(alertContainer, container.firstChild);
    
    // Auto-dismiss after 5 seconds
    setTimeout(function() {
        const bsAlert = new bootstrap.Alert(alertContainer);
        bsAlert.close();
    }, 5000);
}