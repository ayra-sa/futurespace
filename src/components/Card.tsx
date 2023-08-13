import React from "react";

interface Services{
    title: string,
    icon: string
}

interface CardServiceProps extends Services {
  showBorder?: boolean;
}

interface Features{
  title: string,
  desc?: string,
  className?: string
}

const CardService = (props: CardServiceProps) => {
  const cardClasses = `px-12 py-10 text-left shadow rounded-3xl ${
    props.showBorder ? 'border border-primary' : ''
  }`;
  return (
    <div className={cardClasses}>
      <img src={props.icon} alt="" />
      <h2>{props.title}</h2>
      <p className="my-4">Ideal for members who need a <br /> productive space to work.</p>
      <div className="flex gap-2 items-center">
        <span className="font-semibold text-primary">Learn More</span>
        <ion-icon name="arrow-forward-circle" color="primary"></ion-icon>
      </div>
    </div>
  );
};

const CardFeatures = (props: Features) => {
  const cardClasses = `px-11 py-8 rounded-3xl shadow ${props.className || ''}`;
  return(
    <div className={cardClasses}>
      <h2>{props.title}</h2>
      {props.desc && <p style={{ display: props.desc ? 'block' : 'none' }}>{props.desc}</p>}
    </div>
  )
}

export { CardService, CardFeatures };
