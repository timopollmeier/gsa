/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2018 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from 'react';

import renderer from 'react-test-renderer';

import 'jest-styled-components';

import withLayout from 'web/components/layout/withLayout';

const MyComp = props => <div {...props} />;

describe('withLayout HOC tests', () => {

  test('should create a new component', () => {
    const Comp = withLayout()(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with flex', () => {
    const Comp = withLayout({flex: true})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with flex: row', () => {
    const Comp = withLayout({flex: 'row'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with flex: column', () => {
    const Comp = withLayout({flex: 'column'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with wrap', () => {
    const Comp = withLayout({wrap: true})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with wrap: wrap', () => {
    const Comp = withLayout({wrap: 'wrap'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with wrap: nowrap', () => {
    const Comp = withLayout({wrap: 'nowrap'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with grow', () => {
    const Comp = withLayout({grow: true})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with grow: 1', () => {
    const Comp = withLayout({grow: 1})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with grow: 666', () => {
    const Comp = withLayout({grow: 666})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with shrink', () => {
    const Comp = withLayout({shrink: true})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with shrink: 1', () => {
    const Comp = withLayout({shrink: 1})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with shrink: 666', () => {
    const Comp = withLayout({shrink: 666})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with basis: auto', () => {
    const Comp = withLayout({basis: 'auto'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with basis: 20%', () => {
    const Comp = withLayout({basis: '20%'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with align: start', () => {
    const Comp = withLayout({align: 'start'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with flex: column, align: start', () => {
    const Comp = withLayout({flex: 'column', align: 'start'})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with align: [start, end]', () => {
    const Comp = withLayout({align: ['start', 'end']})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with flex: column, align: [start, end]', () => { // eslint-disable-line max-len
    const Comp = withLayout({flex: 'column', align: ['start', 'end']})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should create a new component with align: [center, stretch]', () => {
    const Comp = withLayout({align: ['center', 'stretch']})(MyComp);
    const tree = renderer.create(<Comp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

// vim: set ts=2 sw=2 tw=80:
