import { Fa500Px } from "react-icons/fa";
import { useLocation } from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function FeatureDetails() {
    const location = useLocation();
    console.log(location);
  return (
    <div className="w-full min-h-screen text-slate-400">
        <div className="max-w-[1360px] mx-auto p-5">
            <div className="mt-12">
                <h2 className="text-5xl heading-gradient">{location.state.heading}</h2>
                <p className="pt-2 text-4xl text-red-400">{location.state.subHeading}</p>
            </div>
            <section className="my-12">
                <p className="text-2xl">{location.state.extendedText}</p>
                
            </section>
            <section>
                <VerticalTimeline>
                    {location.state.highlights.map((h, i) => (
                        <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={h.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Fa500Px />}
                        >
                        <h3 className="vertical-timeline-element-title">{h.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{h.subTitle}</h4>
                        <p>
                        
                        </p>
                    </VerticalTimelineElement>
                ))}
                </VerticalTimeline>
            </section>
        </div>
    </div>
  )
}
