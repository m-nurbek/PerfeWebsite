import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef} from 'react';

function OurServices() {
  const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                } else {
                    entry.target.classList.remove('fadeIn');
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);
  
  return (
    <>
      <section className="container">
        <h1>Our Services</h1>
        <section className="card__container" ref={ref}>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <div className="card__content">
                <h3>Designing</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="card__content">
                <h3>Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
            <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="card__content">
                <h3>SEO</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>

        </section>
      </section>
    </>
  );
}

export default OurServices;