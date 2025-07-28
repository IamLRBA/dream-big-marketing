import React from 'react';
import { 
  HiOutlineShieldCheck, 
  HiOutlineCalendar, 
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineCollection,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlineCheck,
  HiOutlineBell,
  HiOutlinePuzzle,
  HiOutlineSupport,
  HiOutlineChartBar,
  HiOutlineEye,
  HiOutlineChatAlt2,
  HiOutlineGlobe
} from 'react-icons/hi';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <section className="section privacy-policy-section">
        <div className="container">
          <div className="policy-header">
            <HiOutlineShieldCheck className="policy-icon" />
            <h1 className="page-title">Privacy Policy</h1>
          </div>
          
          <div className="policy-content">
            <div className="policy-meta">
              <span><HiOutlineCalendar className="meta-icon" /> Last updated: June 30, 2025</span>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineDocumentText className="section-icon" /> 1. Introduction</h2>
              <p>
                Welcome to DreamBIG Marketing Consultancy ("us", "we", or "our"). We operate the 
                dream-big-mkt.com website (the "Service").
              </p>
              <p>
                This page informs you of our policies regarding the collection, use, and 
                disclosure of personal data when you use our Service and the choices you 
                have associated with that data.
              </p>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineCollection className="section-icon" /> 2. Information Collection And Use</h2>
              <p>
                We collect several different types of information for various purposes to 
                provide and improve our Service to you.
              </p>
              
              <h3><HiOutlineClipboardList className="subsection-icon" /> Types of Data Collected</h3>
              <p><strong>Personal Data</strong></p>
              <p>
                While using our Service, we may ask you to provide us with certain personally 
                identifiable information that can be used to contact or identify you 
                ("Personal Data"). Personally identifiable information may include:
              </p>
              <ul className="data-list">
                <li><HiOutlineMail /> Email address</li>
                <li><HiOutlineUser /> First name and last name</li>
                <li><HiOutlineMail /> Phone number</li>
                <li><HiOutlineOfficeBuilding /> Company name</li>
                <li><HiOutlineCog /> Cookies and Usage Data</li>
              </ul>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineCog className="section-icon" /> 3. Use of Data</h2>
              <p>DreamBIG Marketing Consultancy uses the collected data for various purposes:</p>
              <ul className="usage-list">
                <li><HiOutlineCheck /> To provide and maintain our Service</li>
                <li><HiOutlineBell /> To notify you about changes to our Service</li>
                <li><HiOutlinePuzzle /> To allow you to participate in interactive features</li>
                <li><HiOutlineSupport /> To provide customer support</li>
                <li><HiOutlineChartBar /> To gather analysis to improve our Service</li>
                <li><HiOutlineEye /> To monitor the usage of our Service</li>
                <li><HiOutlineShieldCheck /> To detect, prevent and address technical issues</li>
                <li><HiOutlineMail /> To send marketing communications</li>
              </ul>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineShieldCheck className="section-icon" /> 4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of 
                transmission over the Internet, or method of electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your Personal 
                Data, we cannot guarantee its absolute security.
              </p>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineDocumentText className="section-icon" /> 5. Changes To This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
            
            <div className="policy-section">
              <h2><HiOutlineChatAlt2 className="section-icon" /> 6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="contact-list">
                <li><HiOutlineMail /> By email: privacy@dream-big-mkt.com</li>
                <li><HiOutlineGlobe /> By visiting: dream-big-mkt.com/contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;