"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ThankYouPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-3 p-sm-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="text-center">
              
              {/* Success Image */}
              <div className="mb-4 mb-sm-5">
                <img 
                  src="/assets/img/landingpage/thank-you.png" 
                  alt="Success" 
                  className="img-fluid"
                  style={{ 
                    maxWidth: '100%',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '450px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Success Message */}
              <div className="mb-4 mb-sm-5">
                <p className="lead text-dark mb-0 fs-5 fs-sm-4 fw-semibold lh-base" 
                   style={{ 
                     color: '#2B6BB3',
                     textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                     lineHeight: '1.6'
                   }}>
                  Your message has been sent successfully! We'll get back to you within 24 hours.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 justify-content-center">
                <Link 
                  href="/"
                  className="btn btn-lg px-4 py-2"
                  style={{
                    backgroundColor: '#2B6BB3',
                    borderColor: '#2B6BB3',
                    color: 'white'
                  }}
                >
                  <i className="bi bi-house me-2"></i>
                  <span className="d-none d-sm-inline">Back to Home</span>
                  <span className="d-sm-none">Home</span>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-3 mt-sm-4 text-muted">
                <p className="small mb-0 fs-7 fs-sm-6">
                  Need immediate help? Call us at{' '}
                  <a href="tel:+919667092077" 
                     className="fw-semibold text-decoration-none"
                     style={{ color: '#2B6BB3' }}>
                    +91 9667092077
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for better responsiveness */}
      <style jsx>{`
        @media (max-width: 576px) {
          .fs-7 {
            font-size: 0.75rem !important;
          }
        }
        
        @media (min-width: 576px) {
          .fs-6 {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .fs-5 {
            font-size: 1.25rem !important;
          }
        }
        
        .img-fluid {
          transition: all 0.3s ease;
        }
        
        .btn {
          transition: all 0.3s ease;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;
