/**
 * BackButton Component
 *
 * This component renders a button that navigates the user back to the home page.
 * It uses the TransitionLink component for smooth page transitions.
 *
 * @returns {JSX.Element} A link styled as a back button.
 */

import React from "react";
import TransitionLink from "../TransitionLink/TransitionLink";

const BackButton = () => {
  return <TransitionLink href="/">← Back</TransitionLink>;
};

export default BackButton;
