import { Fragment } from "react";
import Button from "../../components/button/button";
import { ButtonTypes, ButtonSizes } from "../../config/buttonTypes";
import { thousandSeparator } from "../../utils/data-service";

const ButtonsDetails = ({
  handleAddNewReservation,
  handleCancel,
  handlebookNow,
  totalAmount,
}) => {
  return (
    <Fragment>
      <div style={{ flexBasis: "33.333333%", textAlign: "right" }}>
        <Button
          size={ButtonSizes.MEDIUM}
          label={`$ ${thousandSeparator(totalAmount)}`}
          onClickHandler={handlebookNow}
          type={ButtonTypes.PRIMARY}
        />
      </div>
      <div style={{ flexBasis: "33.333333%", textAlign: "right" }}>
        <Button
          size={ButtonSizes.MEDIUM}
          label="Hacer otra reservación"
          onClickHandler={handleAddNewReservation}
          type={ButtonTypes.TERTIARY}
        />
      </div>
      <div style={{ flexBasis: "33.333333%", textAlign: "right" }}>
        <Button
          size={ButtonSizes.MEDIUM}
          label="Cancelar reservación"
          onClickHandler={handleCancel}
          type={ButtonTypes.SECONDARY}
        />
      </div>
    </Fragment>
  );
};

export default ButtonsDetails;
