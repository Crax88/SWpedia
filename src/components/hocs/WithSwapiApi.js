import React from "react";
import { SwapiApiConsumer } from "../swapiApiContext/swapiApiContext";

const withSwapiApi = mapApiMethodsToProps => Wrapped => {
  return props => {
    return (
      <SwapiApiConsumer>
        {swapiApi => {
          const apiProps = mapApiMethodsToProps(swapiApi);
          return <Wrapped {...props} {...apiProps} />;
        }}
      </SwapiApiConsumer>
    );
  };
};
export default withSwapiApi;
