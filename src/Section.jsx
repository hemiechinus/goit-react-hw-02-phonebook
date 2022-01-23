import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

const BoxTitle = styled.div`
  margin-top: 15px;
  border: 1px solid;
  border-radius: 10px;
  width: 400px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}
`

export const Section = ({ title, children }) => {
    return (
    <>
    <BoxTitle>
    <h2>{title}</h2>
    {children}
    </BoxTitle>
    </>
    );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};