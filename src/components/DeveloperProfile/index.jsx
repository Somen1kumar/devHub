import React from "react";
import { useSelector } from "react-redux";
import { DeveloperLightStyles, DeveloperDarkStyles } from "./style"; // Assuming you have a style.js file for styles
import { useNavigate } from "react-router-dom";
const DeveloperProfile = () => {
  const navigator = useNavigate();
  const developer = useSelector((store) => store.userStore.currentDeveloperData);
  const selector = useSelector((store) => store.userStore.isDarkTheme);
  const developerStyles = selector ? DeveloperDarkStyles : DeveloperLightStyles;
  if (!developer || Object.keys(developer).length === 0) {
    navigator("/");
    return;
  } 
  return (
    <div className={developerStyles.containerBox}>
      {/* Basic Info */}
      <div className={developerStyles.wrapperBox}>
        <img
          src={developer.avatar}
          alt={developer.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
        />
        <div className="text-center sm:text-left">
          <h2 className={developerStyles.h2Style}>{developer.name}</h2>
          <p className={developerStyles.descStyle}>{developer.bio}</p>
          {/* Social Links */}
          <div className="flex justify-center sm:justify-start gap-3 mt-2">
            <a
              href={developer.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={developerStyles.githubLinkStyle}
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </a>
            <a
              href={developer.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.6z"/>
              </svg>
            </a>
            <a
              href={developer.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.58-.03-.86-.08a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A10.1 10.1 0 0 0 24 4.56z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {developer.skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Blog Posts */}
      <div>
        <h3 className={developerStyles.blogTitleStyle}>Blog Posts</h3>
        <div className="flex flex-col gap-3">
          {developer.blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-lg p-3 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h4 className="font-semibold text-base">{blog.title}</h4>
                <span className="text-xs text-gray-400 mt-1 sm:mt-0">
                  {new Date(blog.publishedDate).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;