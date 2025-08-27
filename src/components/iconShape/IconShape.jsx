import "./iconShape.css";

export default function IconShape({icon, size = 98, className = ""}) {
    return (
        <div
            className={`ss-icon-container ${className}`}
            style={{ "--icon-size": `${size}px` }}
        >
            <div className="ss-big-circle">
                <div className="ss-circle">
                    <img src={icon} alt="icon" />
                </div>
            </div>
        </div>
    );
};
