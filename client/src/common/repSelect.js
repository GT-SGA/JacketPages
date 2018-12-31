import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepSelect extends Component {
  render() {
    return (
      <select
        id="repSelect"
        value={this.props.selected}
        onChange={e => this.props.onChange(e.target.value)}
      >
        <option value="" selected="selected">Select a UHR Representative</option>
        <optgroup label="SGA">
          <option value="725">Abigail Burke -- Freshman Class Representative</option>
          <option value="724">Alexander Crellin -- School of Music Representative</option>
          <option value="633">Amanda Reynolds -- Senior Class Representative</option>
          <option value="653">Amanda Schaefer -- Chemical and Biomolecular Representative</option>
          <option value="624">Andrew Shumway -- Physics Representative</option>
          <option value="727">Anne Hardin -- Freshman Class Representative</option>
          <option value="730">Apollo Liu -- International Affairs Representative</option>
          <option value="509">Ayodeji Aladesanmi -- Junior Class Representative</option>
          <option value="522">Calvin Runnels -- Chemistry &amp; Biochemistry Representative</option>
          <option value="668">Charles Angell -- Economics Representative</option>
          <option value="721">Chirag Mendpara -- Senior Class Representative</option>
          <option value="737">Connie Huang -- Junior Class Representative</option>
          <option value="693">Dana Krzyzaniak -- Co-op Representative</option>
          <option value="662">Daniel Luehm -- Psychology Representative</option>
          <option value="654">Darryl  Terry II -- Public Policy Representative</option>
          <option value="731">David Ashcom -- College of Business Representative</option>
          <option value="664">Davon Prewitt -- College of Computing Representative</option>
          <option value="742">Elizabeth Sit -- Architecture Representative</option>
          <option value="652">Elizabeth Cleary -- College of Business Representative</option>
          <option value="697">Erin Gant -- Athletics Representative</option>
          <option value="732">Fang Shi -- Biomedical Engineering Representative</option>
          <option value="700">Francis  Yang -- Sophomore Class Representative</option>
          <option value="741">Hyun Ki Lee -- Aerospace Engineering Representative</option>
          <option value="738">Jaeiza Smith -- Civil and Environmental Engineering Representative</option>
          <option value="671">Jore Oni -- Sophomore Class Representative</option>
          <option value="734">Joshua Von Holtz -- Mechanical Engineering Representative</option>
          <option value="698">Joshua Forbes -- Member-At-Large</option>
          <option value="562">Lexie Scott -- Literature, Media, and Communication Rep</option>
          <option value="669">Maria Jose Lozan -- Sophomore Class Representative</option>
          <option value="622">Matthew Daigle -- Industrial &amp; Systems Engineering Representative</option>
          <option value="733">Nate Knauf -- College of Computing Representative</option>
          <option value="627">Niambh O&#39;Neill -- Biology Representative</option>
          <option value="663">Nihar Ullal -- Industrial &amp; Systems Engineering Representative</option>
          <option value="726">Olivia Fulmore -- Freshman Class Representative</option>
          <option value="658">Parth Patel -- Biomedical Engineering Representative</option>
          <option value="620">Pooja Juvekar -- Sophomore Class Representative</option>
          <option value="736">Pooja Patel -- Modern Languages Representative</option>
          <option value="666">Sahitya Nara -- Member-At-Large</option>
          <option value="729">Sarah Andrews -- Material Science Engineering Representative</option>
          <option value="735">Sarah Kate Carpenter -- Mechanical Engineering Representative</option>
          <option value="649">Sujay Peramanu -- Undergraduate President</option>
          <option value="632">Sunny Thomson -- Mathematics Representative</option>
          <option value="628">Vathsan Ramprakash -- Electrical and Computer Engineering&nbsp;Representativ</option>
          <option value="722">Walker Nance -- Junior Class Representative</option>
          <option value="699">Will  Finkelstein -- Senior Class Representative</option>
          <option value="607">Zoe Sieling -- Junior Class Representative</option>
        </optgroup>
      </select>
    );
  }
}

const GradRepSelect = () => (
  <select name="data_Authors_grad_auth_id" id="AuthorsGradAuthId">
    <option value="" selected="selected">Select a GSS Senator</option>
    <optgroup label="SGA">
      <option value="701">Aishwarya  Balwani  -- ECE</option>
      <option value="674">Andrew Cox -- Aerospace Engineering</option>
      <option value="694">Aroua Gharbi -- Computer Science</option>
      <option value="713">ARSHDEEP SOOD -- ECE</option>
      <option value="718">Baxter Sapp -- International Affairs</option>
      <option value="681">Brian Fuchs -- Mechanical Engineering</option>
      <option value="708">CHUKWUEMEKA OBIKWELU -- ECE</option>
      <option value="740">Daniel Moreno -- At Large Senator (Mechanical Engineering)</option>
      <option value="675">Daniel Okegbu -- Aerospace Engineering</option>
      <option value="703">Dara Epstein -- City and Regional Planning</option>
      <option value="677">Elorm Agra -- Biomedical Engineering</option>
      <option value="719">FILIPPOS TAGKLIS -- EAS</option>
      <option value="673">Guanghui Zhu -- Chemical &amp; Biomolecular Engineering</option>
      <option value="690">Jason Alcedo -- College of Business</option>
      <option value="684">Kelly Michie -- Biology and Applied Physiology</option>
      <option value="685">Kristin McKenna -- Chemistry &amp; Biochemistry</option>
      <option value="743">Marc Muehlberg -- Graduate Student Senate Chairman</option>
      <option value="691">Matthew Reilly -- College of Business</option>
      <option value="704">Mike Winters -- Music</option>
      <option value="716">Muhammad Usman -- Mechanical Engineering</option>
      <option value="644">Narayan Shirolkar -- Materials Science and Engineering</option>
      <option value="709">Patrick Goley -- ECE</option>
      <option value="687">Rachel Wiseley -- College of Business</option>
      <option value="683">Renee Shelby -- History and Sociology</option>
      <option value="739">Ryan Rooney -- At Large Senator (Business)</option>
      <option value="574">Skanda Prasad P N -- Graduate SGA President 2017-2018</option>
      <option value="498">Stephen Dumas -- Electrical and Computer Engineering</option>
      <option value="584">Sukanya M. Sharma -- Materials Science and Engineering</option>
      <option value="717">Timothy Ibru -- Mechanical Engineering</option>
      <option value="678">Trisha Sen -- Chemical &amp; Biomolecular Engineering</option>
      <option value="712">Vaisakh Haridas -- ECE</option>
      <option value="670">VIKAS PATEL -- Building Construction</option>
      <option value="676">William Sealy -- Aerospace Engineering</option>
      <option value="715">William Lassiter -- ISyE</option>
      <option value="636">Wilson Espinoza -- Civil &amp; Environmental Engineering</option>
      <option value="720">Yoan Delchev -- Math</option>
    </optgroup>
  </select>
);

RepSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default RepSelect;
