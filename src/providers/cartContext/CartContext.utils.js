export function getPopulorData(givenState) {
  return givenState.Populor === true
    ? {
        ...givenState,
        Data: {
          ...givenState.Data,
          cake: givenState.Data.cake.filter((item) => item.isPopulor === true),

          cupcake: givenState.Data.cupcake.filter(
            (item) => item.isPopulor === true
          ),
          cookie: givenState.Data.cookie.filter(
            (item) => item.isPopulor === true
          ),
          brownie: givenState.Data.brownie.filter(
            (item) => item.isPopulor === true
          ),
        },
      }
    : { ...givenState };
}

export function getDiscountedData(givenState) {
  return givenState.Discount === true
    ? {
        ...givenState,
        Data: {
          ...givenState.Data,
          cake: givenState.Data.cake.filter((item) => item.isDiscount === true),

          cupcake: givenState.Data.cupcake.filter(
            (item) => item.isDiscount === true
          ),
          cookie: givenState.Data.cookie.filter(
            (item) => item.isDiscount === true
          ),
          brownie: givenState.Data.brownie.filter(
            (item) => item.isDiscount === true
          ),
        },
      }
    : { ...givenState };
}

export function getFastDeliveryData(givenState) {
  return givenState.Ready === true
    ? {
        ...givenState,
        Data: {
          ...givenState.Data,
          cake: givenState.Data.cake.filter((item) => item.isReady === true),

          cupcake: givenState.Data.cupcake.filter(
            (item) => item.isReady === true
          ),
          cookie: givenState.Data.cookie.filter(
            (item) => item.isReady === true
          ),
          brownie: givenState.Data.brownie.filter(
            (item) => item.isReady === true
          ),
        },
      }
    : { ...givenState };
}
