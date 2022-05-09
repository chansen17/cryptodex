import { Fa500Px, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function FeatureDetails() {
    const location = useLocation();
    // console.log(location);
  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-400">
        <div className="max-w-[1360px] mx-auto p-5">
            <section className="my-12 max-w-5xl mx-auto text-left md:text-center">
                <h2 className="text-3xl lg:text-5xl heading-gradient">{location.state.heading}</h2>
                <div className="max-w-2xl mx-auto py-6">
                    <p className="pt-2 text-2xl md:text-3xl lg:text-4xl pb-2 text-red-400">{location.state.subHeading}</p>
                    <p className="text-xl md:text-2xl">{location.state.extendedText}</p>
                </div>
            </section>
            <section className="max-w-5xl mx-auto">
                <VerticalTimeline>
                    {location?.state.highlights.map((h, index) => (
                        <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 220, 220)', color: '#fff' }}
                        date={h.date}
                        iconStyle={{ background: 'rgb(0, 220, 220)', color: '#fff' }}
                        icon={h.icon === 'left' ? <FaChevronLeft/> : <FaChevronRight/>}
                        >
                        <h3 className="vertical-timeline-element-title text-2xl">{h.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{h.subTitle}</h4>
                        <p>
                        {h.plans.join(', ')}
                        </p>
                    </VerticalTimelineElement>
                ))}
                </VerticalTimeline>
            </section>
        </div>
    </div>
  )
}
