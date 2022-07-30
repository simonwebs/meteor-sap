// @ts-nocheck
import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MainRoutes } from '../app/ui/components/main/MainRoutes';
import { ClimbingBoxLoader } from 'react-spinners/ClimbingBoxLoader';

Meteor.startup(() => {
  render(<Suspense fallback={
    <ClimbingBoxLoader
      color="#2B1347"
      cssOverride={{}}
      size={20}
    />}>
  <MainRoutes/>
  </Suspense>, document.getElementById('react-target'));
});
