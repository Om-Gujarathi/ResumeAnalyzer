from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Ensure the uploads directory exists
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route('/api/submit', methods=['POST'])
def submit():
    try:
        # Handle form data
        project_count = request.form.get('projectCount')
        project_links = request.form.getlist('projectLinks')  # Assuming projectLinks is sent as an array
        profile_links = request.form.get('profileLinks')  # Assuming projectLinks is sent as an array
        jd_text = request.form.get('jdText')

        # Handle file uploads
        resume = request.files.get('resume')
        jd_file = request.files.get('jdFile')

        # Process files if they exist
        resume_filename = None
        jd_file_filename = None

        if resume:
            resume_filename = f"{UPLOAD_FOLDER}/{resume.filename}"
            resume.save(resume_filename)

        if jd_file:
            jd_file_filename = f"{UPLOAD_FOLDER}/{jd_file.filename}"
            jd_file.save(jd_file_filename)

        # Response with all received data
        return jsonify({
            'status': 'success',
            'data': {
                'projectCount': project_count,
                'projectLinks': project_links,
                'profile_links': profile_links,
                'jdText': jd_text,
                'resume': resume_filename,
                'jdFile': jd_file_filename,
            }
        }), 200

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000)
