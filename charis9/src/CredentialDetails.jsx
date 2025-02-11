
import "./CredentialDetails.css"; // <-- Import the new CSS file for credential details

function CredentialDetails() {
  return (
    <div className="credential-details">
      {/* Top Action Bar */}

      {/* Main Content Area */}
      <div className="credential-layout">
        {/* Left (Main) Section */}
        <div className="credential-main">
          <h3 className="course-title">
            ISO 9001:2015 Lead Auditor (Quality Management Systems)
            Training Course
          </h3>

          <div className="credential-owner">
            <div className="owner-initials">NH</div>
            <div>
              <strong>Nasir Hussain</strong>
              <div className="owner-link">View All Credentials</div>
            </div>
          </div>

          <p className="credential-description">
            The aim of this course is to provide delegates with the knowledge and skills required to perform first-, second-, and third-party audits of quality management systems against ISO 9001, in accordance with ISO 19011 and ISO/IEC 17021, as applicable.
          </p>

          <h2 className="section-title">Skills/Knowledge</h2>
          <div className="skills">
            <span>
              Proficiency in ISO 9001:2015 Quality management systems —
              Requirements
            </span>
            <span>
              Expertise in ISO 19011:2018 Guidelines for auditing management
              systems
            </span>
            <span>
              Plan, conduct, report and follow-up on an quality management
              system to establish conformity
            </span>
            <span>Audit process and Auditor responsibilities</span>
          </div>

          <div className="dates-row">
            <div>
              <strong>ISSUED ON</strong>
              <p>27 September 2023</p>
            </div>
            <div>
              <strong>EXPIRES ON</strong>
              <p>Does not expire</p>
            </div>
          </div>

          <h2 className="section-title">Earning Criteria</h2>
          <div className="criteria-item">
            <strong>REQUIRED</strong>
            <div>
              <p>
                <b>Participation</b> — Attend 40 Hours Instructor-Led Training
                Course
              </p>
              <p>
                <b>Exam</b> — Successfully pass the Continuous Course Evaluation
              </p>
              <p>
                <b>Exam</b> — Successfully pass the final examination held by
                CQI IRCA, UK
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="credential-sidebar">
          <div className="share-credential">
            <div className="share-credential-content">
              <h3>Share Credential</h3>
              <p>Show this credential on your social network</p>
              <div className="share-buttons">
                <a
                  href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fwww.credential.net%252Fe1265307-ba25-4772-ba68-1b49e9430706%253Futm_source%253Dlinkedin%2526utm_medium%253Dsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>

                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.credential.net%2Fe1265307-ba25-4772-ba68-1b49e9430706%3Futm_source%3Dfacebook%26utm_medium%3Dsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/facebook.svg" alt="Facebook" />
                </a>

                <a
                  href="https://x.com/intent/post?url=https%3A%2F%2Fwww.credential.net%2Fe1265307-ba25-4772-ba68-1b49e9430706%3Futm_source%3Dtwitter%26utm_medium%3Dsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/x.svg" alt="X" />
                </a>

                <a
                  href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fwww.credential.net%2Fe1265307-ba25-4772-ba68-1b49e9430706%3Futm_source%3Dwhatsapp%26utm_medium%3Dsocial&type=custom_url&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" />
                </a>
              </div>
            </div>
            <div className="share-credential-image">
              <img src="/credential.png" alt="Credential" />
            </div>
          </div>

          <div className="credential-verification">
            <h3>Credential Verification</h3>
            <p>
              This credential is from a <strong>verified issuer</strong>
            </p>
            <p>Secured by Blockchain </p>
            <button style={{ width: "100%" }}>Verify Credential</button>
          </div>

          <div className="issuer-info">
            <h3>More about the Issuer</h3>

            <button>Visit Issuer Website</button>
            <button>Visit Course Page</button>
            <p className="issuer-credentials-link">
              More credentials from the Issuer <br />
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CredentialDetails;
