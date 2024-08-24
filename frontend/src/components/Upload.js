import React, { useState } from 'react';

const Upload = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [projectLinks, setProjectLinks] = useState([]);
  const [resume, setResume] = useState(null);

  // Handle changes in the project count
  const handleProjectCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setProjectCount(count);
    setProjectLinks(new Array(count).fill(''));
  };

  // Handle changes in the project links
  const handleProjectLinkChange = (index, value) => {
    const newLinks = [...projectLinks];
    newLinks[index] = value;
    setProjectLinks(newLinks);
  };

  // Handle file upload for resume
  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  // Trigger file input click programmatically
  const handleBoxClick = () => {
    document.getElementById('resume-upload-input').click();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log({
      projectCount,
      projectLinks,
      resume,
    });
  };

  return (
    <div className='bg-whitev'>
    <div className="max-w-5xl mx-auto p-8 min-h-screen">

      {/* Profile Links Section */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Profile Links</h2>
        <div className="w-full border-b-4 border-orange-300 mb-4"></div>
        <form>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png' className='w-10 h-10 object-cover' alt='HackerRank'/>
                
                HackerRank Link
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="https://www.hackerrank.com/yourprofile"
              />
            </div>
            <div>
              <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
              <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' className='w-8 h-8 object-cover' alt='leetcode'/>
                
                LeetCode Link</label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="https://leetcode.com/yourprofile"
              />
            </div>
            <div>
              <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
                <img src='https://img.icons8.com/fluent/48/000000/linkedin.png' className='w-8 h-8 object-cover' alt='linkedin'/>
                LinkedIn Link
                </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="https://www.linkedin.com/in/yourprofile"
              />
            </div>
            <div>
              <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
              <img src='https://img.icons8.com/fluent/48/000000/github.png' className='w-8 h-8 object-cover' alt='github'/>
                GitHub Link</label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                placeholder="https://github.com/yourprofile"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Project Information Section */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Project Information</h2>
        <div className="w-full border-b-4 border-orange-300 mb-4"></div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Projects (Max 4)</label>
            <select
              value={projectCount}
              onChange={handleProjectCountChange}
              className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {projectLinks.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              {projectLinks.map((link, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project {index + 1} GitHub Link
                  </label>
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleProjectLinkChange(index, e.target.value)}
                    className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder={`https://github.com/yourproject${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Resume Upload Section */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Resume Upload</h2>
        <div className="w-full border-b-4 border-orange-300 mb-6"></div>
        <div className="flex flex-col items-center">
          <div
            onClick={handleBoxClick}
            className="w-full h-40 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-md bg-orange-100 cursor-pointer hover:bg-orange-200 transition"
          >
            {resume ? (
              <p className="text-gray-700">{resume.name}</p>
            ) : (
              <p className="text-gray-500">Click here to upload your resume</p>
            )}
          </div>
          <input
            type="file"
            id="resume-upload-input"
            onChange={handleResumeUpload}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <p className="mt-2 text-sm text-gray-500">
            Accepted formats: PDF, DOC, DOCX. Max file size: 5MB.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-600 transition"
        >
          Analyze
        </button>
      </div>
    </div>
    </div>
  );
};

export default Upload;
