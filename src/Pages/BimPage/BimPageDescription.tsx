import { StudentPrizes } from "../../components/StudentPrize/StudentPrizes/StudentPrizes";
import { Prizes } from "../../components/Prize/Prizes/Prizes";
import { Employees } from "../../components/EmployeeThumbnail/Employees/Employees";

import "./BimPageDescription.css";

export interface IBimPageDescriptionProps {}

export const BimPageDescription = ({}: IBimPageDescriptionProps) => {
  return (
    <>
      <div className="bimpage__description-container">
        <div className="bimpage__description-paragraph">
          <h3 className="bimpage__description">Description</h3>
          <p className="paragraph">
            Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet
            blandit. Suspendisse suscipit quam pretium rutrum porta.
            Pellentesque porta lacinia erat, a vestibulum orci dapibus non.
            Suspendisse cursus justo fringilla dui lobortis gravida. Fusce at
            sem diam. Phasellus dictum elit hendrerit, laoreet lectus dapibus,
            luctus nulla. Maecenas porttitor euismod urna, non pulvinar lectus
            porta eu. Etiam vel eros lorem. Curabitur sit amet odio mi.
            Suspendisse justo dui, rhoncus non quam nec, gravida lobortis massa.
            Maecenas ut congue arcu, quis vestibulum est.
          </p>

          <p className="paragraph-bold">
            Proin lacinia libero dapibus blandit egestas. Donec a semper nisi,
            rutrum fringilla nibh.
          </p>
          <p className="paragraph">
            Maecenas ut congue arcu, quis vestibulum est. Proin lacinia libero
            dapibus blandit egestas. Donec a semper nisi, rutrum fringilla nibh.
            Maecenas scelerisque nulla in dapibus gravida. Aliquam tortor ipsum,
            sagittis at mi nec, vehicula dapibus dolor. Aenean eu massa maximus,
            euismod felis quis, ullamcorper lacus. Nunc cursus est nec dui
            lacinia pretium. Nam placerat id sem et ullamcorper.
          </p>
        </div>
        <div className="bimpage__prizes">
          <h2 className="bimpage__prizes-title">Prizes</h2>
          <Prizes />
        </div>
      </div>
      <h3 className="bimpage__description">You're a stundet?</h3>
      <div className="bimpage__description-paragraph">
        <p className="paragraph">
          Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet
          blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque
          porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus
          justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus
          dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas
          porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros
          lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non
          quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis
          vestibulum est.
        </p>
      </div>
      <StudentPrizes />
      <h2 className="bimpage__jury-title">Meet the jury</h2>
      <Employees />
    </>
  );
};
