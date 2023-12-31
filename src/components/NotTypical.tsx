import { useEffect, useRef} from 'react';


export default function NotTypical() {
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
    <div className='notTypical' ref={ref} id={"about"}>
        <div className="textContainer">
            <>
                <h1>Not your typical web agency</h1>
                <p>PerFe is an <span>operative and efficient</span> web development agency where each project becomes a unique work of art. We specialise in modern and concise web solutions, where style meets functionality.</p>
                <a href="">View services <span>→</span></a>
            </>
        </div>
    </div>

    );
  
}