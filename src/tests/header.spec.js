import Header from '../components/header';
import { Link } from 'preact-router/match';
import { h } from 'preact';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
import { expect } from 'chai';
import SetupDocument from './setupDocument';

describe('Initial Test of the Header', () => {
  before(() => {
    SetupDocument();
  })

	it('Renders 3 nav items', () => {
    const context = shallow(<Header />);
    debugger
		expect(context.find('h1').text()).to.equal('Preact App');
		expect(context.find(<Link />).length).to.equal(3);
	});
});
