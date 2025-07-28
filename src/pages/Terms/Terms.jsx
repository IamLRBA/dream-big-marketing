import React from 'react';
import { 
  HiOutlineDocumentText, 
  HiOutlineCalendar,
  HiOutlineScale,
  HiOutlineClipboardCheck,
  HiOutlineExclamation,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineLink,
  HiOutlinePencilAlt,
  HiOutlineGlobe,
  HiOutlineXCircle,
  HiOutlineBan,
  HiOutlineCode,
  HiOutlineTrash,
  HiOutlineDuplicate
} from 'react-icons/hi';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <section className="section terms-section">
        <div className="container">
          <div className="terms-header">
            <HiOutlineDocumentText className="terms-icon" />
            <h1 className="page-title">Terms of Service</h1>
          </div>
          
          <div className="terms-content">
            <div className="terms-meta">
              <span><HiOutlineCalendar className="meta-icon" /> Last updated: June 30, 2025</span>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineScale className="section-icon" /> 1. Terms</h2>
              <p>
                By accessing the website at dream-big-mkt.com, you are agreeing to be bound by these 
                terms of service, all applicable laws and regulations, and agree that you are 
                responsible for compliance with any applicable local laws.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineClipboardCheck className="section-icon" /> 2. Use License</h2>
              <ol type="a">
                <li>
                  Permission is granted to temporarily download one copy of the materials 
                  (information or software) on DreamBIG Marketing Consultancy's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                  <ol type="i">
                    <li><HiOutlineXCircle /> modify or copy the materials;</li>
                    <li><HiOutlineBan /> use the materials for any commercial purpose;</li>
                    <li><HiOutlineCode /> attempt to decompile or reverse engineer any software;</li>
                    <li><HiOutlineTrash /> remove any copyright or other proprietary notations;</li>
                    <li><HiOutlineDuplicate /> transfer or mirror the materials.</li>
                  </ol>
                </li>
                <li>
                  This license shall automatically terminate if you violate any of these 
                  restrictions and may be terminated by DreamBIG Marketing Consultancy at any time. 
                  Upon terminating your viewing of these materials or upon the termination 
                  of this license, you must destroy any downloaded materials in your 
                  possession whether in electronic or printed format.
                </li>
              </ol>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineExclamation className="section-icon" /> 3. Disclaimer</h2>
              <p>
                The materials on DreamBIG Marketing Consultancy's website are provided on an 'as is' 
                basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineChartBar className="section-icon" /> 4. Limitations</h2>
              <p>
                In no event shall DreamBIG Marketing Consultancy or its suppliers be liable for any 
                damages arising out of the use or inability to use the materials on our website.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineCheckCircle className="section-icon" /> 5. Accuracy of materials</h2>
              <p>
                The materials appearing on our website could include technical, typographical, 
                or photographic errors. We do not warrant that any materials are accurate, 
                complete or current.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineLink className="section-icon" /> 6. Links</h2>
              <p>
                DreamBIG Marketing Consultancy has not reviewed all of the sites linked to its 
                website and is not responsible for the contents of any such linked site.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlinePencilAlt className="section-icon" /> 7. Modifications</h2>
              <p>
                We may revise these terms of service at any time without notice. By using this 
                website you are agreeing to be bound by the current version of these terms.
              </p>
            </div>
            
            <div className="terms-section">
              <h2><HiOutlineGlobe className="section-icon" /> 8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with 
                the laws of Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;