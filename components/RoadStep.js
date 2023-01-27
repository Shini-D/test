import ToAnimate from "./ToAnimate"

const RoadStep = ({month, items, isActive, isLineActive=false}) => {

    const styDot = (isActive) ? 'relative bg-transparent before:content-empty before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-primary-100/30 before:rounded-full before:animate-ping' : 'bg-primary-100/20'
    const styInnerDot = (isActive) ? '[box-shadow:_0px_0px_8px_#9040F5] lg:[box-shadow:_0px_0px_14px_#9040F5] bg-primary-100' : 'bg-primary-10'
    const styMonth = (isActive) ? 'font-semibold text-primary-100' : ''
    const styLine = (isLineActive) ? 'bg-primary-100' : 'bg-primary-20'

    return (
        <div className="flex relative lg:even:flex-row-reverse items-start group lg:w-[calc(50%+var(--dot)*0.5)] lg:odd:ml-auto">
            
            <div className={`absolute -z-10 top-[calc(var(--dot)*0.5)] left-[calc(var(--dot)*0.5)] h-[calc(100%+var(--g))] w-0.5 lg:w-1 -translate-x-1/2 group-even:lg:left-auto group-even:lg:translate-x-1/2 group-even:lg:right-[calc(var(--dot)*0.5)] group-last:hidden ${styLine}`}></div>

            <div className={`aspect-square w-[var(--dot)] p-1.5 lg:p-2.5 rounded-full shrink-0 ${styDot}`}>
                <div className={`w-full h-full rounded-full ${styInnerDot}`}></div>
            </div>
            <div className="ml-2 md:ml-4 lg:ml-10 2xl:ml-14 group-even:lg:ml-0 group-even:lg:mr-10 group-even:2xl:mr-14 group-even:lg:text-right">
                <ToAnimate tag='h3' styles={`h3 font-title leading-none mt-0.5 lg:mt-1 2xl:mt-0 mb-3 lg:mb-6 2xl:mb-8 tran-op anim-bottom-right-md group-even:lg:anim-left ${styMonth}`}>{month}</ToAnimate>
                <ul>
                    {items.map((item, index) => (
                        <ToAnimate key={index} tag='li' styles="flex items-start text-primary-10 mb-2 lg:mb-3.5 last:mb-0 lg:text-2xl group-even:lg:flex-row-reverse tran-op anim-bottom-right-md group-even:lg:anim-left">
                            <div className="aspect-square w-2 lg:w-2.5 rounded-full bg-primary-100 mt-1.5 lg:mt-3 mr-2 lg:mr-2.5 shrink-0 group-even:lg:mr-0 group-even:lg:ml-2.5"></div>
                            {item}
                        </ToAnimate>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RoadStep