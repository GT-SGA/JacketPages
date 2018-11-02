import React, { Component } from 'react';

class JPCreateBill extends Component {
  render() {
    return (
      <div id="content">
        <div className="clearfix">
              <div id="middle_full">
                  <div id="page_title">Create New Bill</div>
                  <form action="http://localhost:8081/bill_create" onsubmit="return submitForm()" id="BillAddForm" acceptCharset="utf-8">
                      {/* <div style="display:none;"><input name="_method" value="POST" type="hidden" /></div> */}
                      <div className="input text required">
                        <label for="BillTitle">Title</label>
                        <input name="data_Bill_title" maxlength="60" id="BillTitle" required="required" type="text" />
                      </div>
                      <div className="input textarea required">
                        <label for="BillDescription">Description</label>
                        <textarea name="data_Bill_description" cols="30" rows="6" id="BillDescription" required="required" ></textarea>
                      </div>
                      <div className="input textarea">
                        <label for="BillFundraising">Fundraising - Please describe related fundraising efforts</label>
                        <textarea name="data_Bill_fundraising" cols="30" rows="6" id="BillFundraising"></textarea>
                      </div>
                      <div className="input select required">
                        <label for="BillType">Type</label>
                        <select name="data_Bill_type" onchange="hideLineItems()" id="BillType">
                          <option value="Finance Request" selected="selected">Finance Request</option>
                          <option value="Resolution">Resolution</option>
                        </select>
                      </div>
                      <div className="input select required">
                        <label for="categoryChoice">Category</label>
                        <select name="data_Bill_category" id="categoryChoice" onchange="hideAuthors()">
                          <option value="Joint" selected="selected">Joint</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Undergraduate">Undergraduate</option>
                        </select>
                      </div>
                      <div className="input select required">
                          <label for="BillOrgId">Organization</label>
                          <select name="data_Bill_org_id" id="BillOrgId">
                            <option value="" selected="selected">Select Organization</option>
                            <optgroup label="All Organizations">
                              <option value="44886">3D Politics</option>
                              <option value="44698">4 The Good</option>
                              <option value="27850">A Cappella</option>
                              <option value="27771">Aarohi</option>
                              <option value="27868">Academic Quizbowl Team</option>
                              <option value="27769">Acoustical Society of America</option>
                              <option value="27938">Active Minds</option>
                              <option value="44794">Acts Of Kindness</option>
                              <option value="28228">Aerospace Design-Build-Fly Club</option>
                              <option value="27772">African American Student Union</option>
                              <option value="27775">African Student Association</option>
                              <option value="28196">African-American Recruitment Team</option>
                              <option value="44739">Afterschool Motivation</option>
                              <option value="27945">AIESEC</option>
                              <option value="33324">Airsoft Club at Georgia Tech</option>
                              <option value="27954">All For One</option>
                              <option value="44679">ALPFA</option>
                              <option value="28105">Alpha Chi Omega</option>
                              <option value="28016">Alpha Chi Sigma</option>
                              <option value="28126">Alpha Delta Chi</option>
                              <option value="28127">Alpha Delta Pi</option>
                              <option value="28023">Alpha Epsilon Delta Pre-Health Honor Society</option>
                              <option value="28138">Alpha Epsilon Pi</option>
                              <option value="28187">Alpha Eta Mu Beta</option>
                              <option value="28128">Alpha Gamma Delta</option>
                              <option value="28119">Alpha Iota Omicron</option>
                              <option value="28151">Alpha Kappa Alpha</option>
                              <option value="28017">Alpha Kappa Psi</option>
                              <option value="28137">Alpha Omega Epsilon</option>
                              <option value="28180">Alpha Phi</option>
                              <option value="28147">Alpha Phi Alpha</option>
                              <option value="27946">Alpha Phi Omega</option>
                              <option value="28024">Alpha Pi Mu (Industrial Engineering Honor Society)</option>
                              <option value="44672">Alpha Sigma Phi</option>
                              <option value="28155">Alpha Tau Omega</option>
                              <option value="28136">Alpha Xi Delta</option>
                              <option value="44653">Alternative Service Breaks</option>
                              <option value="44925">Ambassadors for Global Awareness (AFGA)</option>
                              <option value="28232">American Association for Aerosol Research Student Chapter at GT</option>
                              <option value="44871">American Association of Blacks in Energy </option>
                              <option value="44681">American Association of Blacks in Energy</option>
                              <option value="28243">American Helicopter Society @ GT</option>
                              <option value="28018">American Institute of Aeronautics and Astronautics</option>
                              <option value="28214">American Institute of Architecture Students</option>
                              <option value="44839">American Mathematical Society </option>
                              <option value="28019">American Medical Student Association</option>
                              <option value="28020">American Nuclear Society GT Student Section</option>
                              <option value="27948">American Red Cross Club</option>
                              <option value="44660">American Society for Engineering Education</option>
                              <option value="28277">American Society for Microbiology</option>
                              <option value="28021">American Society of Civil Engineers</option>
                              <option value="44722">American Society of Highway Engineers</option>
                              <option value="44862">American Society of Highway Engineers</option>
                              <option value="44935">American Society of Mechanical Engineers (ASME)</option>
                              <option value="27949">Amnesty International @ GT</option>
                              <option value="30711">ANAK Society</option>
                              <option value="44744">Android Initiative at Georgia Tech</option>
                              <option value="28292">Anglers' Association</option>
                              <option value="44872">Anglican Campus Fellowship</option>
                              <option value="27950">Animal Welfare Association</option>
                              <option value="27870">Anime O-Tekku</option>
                              <option value="44766">Arab Student Organization (ASO)</option>
                              <option value="44764">Army ROTC Club</option>
                              <option value="28022">Arnold Air Society</option>
                              <option value="44992">Art Matters</option>
                              <option value="44905">Asha for Education</option>
                              <option value="27952">ASHA for Education - GT Chapter</option>
                              <option value="28229">Asian American Student Association</option>
                              <option value="28112">Asian Christian Fellowship - InterVarsity</option>
                              <option value="28047">Association for Computing Machinery</option>
                              <option value="27776">Association for India's Development</option>
                              <option value="28045">Association of Bioinformatics Students</option>
                              <option value="28046">Association of Chemical Engineering Graduate Students</option>
                              <option value="28048">Association of Environmental Engineers and Scientists</option>
                              <option value="27871">Astronomy Club</option>
                              <option value="44991">Atl Tanishq</option>
                              <option value="27985">Atlanta Chinese Christian Church</option>
                              <option value="44742">Autism Railroad</option>
                              <option value="40545">Auxiliary Services</option>
                              <option value="27777">Avant-Garde "The Fashion Society at Georgia Tech"</option>
                              <option value="27872">Badminton Club at GT</option>
                              <option value="28220">Baha'i Club</option>
                              <option value="27873">Ballroom Dance Club at Georgia Tech</option>
                              <option value="27857">Band Club @ Georgia Tech</option>
                              <option value="27778">Bangladesh Student Association</option>
                              <option value="28208">BAPS Campus Fellowship</option>
                              <option value="27819">Baptist Collegiate Ministries</option>
                              <option value="44791">Barbell Club at Georgia Tech</option>
                              <option value="44962">Be the Match</option>
                              <option value="28049">Behavior; Evolution; and Ecology Research Society</option>
                              <option value="44665">Believers in Business at Georgia Tech</option>
                              <option value="44703">Best Buddies</option>
                              <option value="28026">Beta Beta Beta</option>
                              <option value="28145">Beta Theta Pi</option>
                              <option value="28257">Bethel Campus Fellowship</option>
                              <option value="27820">Bhakti Yoga Club</option>
                              <option value="44980">Bhangra at GT</option>
                              <option value="44892">Bicycle Polo</option>
                              <option value="44855">BioEngineering Graduate Association</option>
                              <option value="44706">Bioengineering Graduate Student Advisory Committee (BGSAC)</option>
                              <option value="28269">Biology Student Advisory Committee</option>
                              <option value="44959">Biomedical Engineering Learning Commons</option>
                              <option value="28050">Biomedical Engineering Society</option>
                              <option value="33326">Biomedical Research &amp; Opportunities Society</option>
                              <option value="44857">Bitcoin@Tech</option>
                              <option value="44863">Bitcoin@Tech</option>
                              <option value="27779">Black Graduate Students Association</option>
                              <option value="44837">Black Student Organizations Alliance </option>
                              <option value="27851">Blueprint</option>
                              <option value="44976">BME Robotics</option>
                              <option value="27953">BOPSOP</option>
                              <option value="27874">Bowling Club</option>
                              <option value="44975">Bowling Club</option>
                              <option value="27780">Brazilian Student Association</option>
                              <option value="28027">Briaerean Honor Society</option>
                              <option value="27875">Bridge Club</option>
                              <option value="44774">Bridge International Society</option>
                              <option value="44973">Business Analytics Club</option>
                              <option value="44754">BuzzBeats</option>
                              <option value="27852">BuzzStudios</option>
                              <option value="28051">Cadet Support Association</option>
                              <option value="44932">Camp for a Cause</option>
                              <option value="27822">Campus Freethinkers</option>
                              <option value="44824">Campus Kitchens</option>
                              <option value="27853">Campus MovieFest</option>
                              <option value="27823">Campus Outreach</option>
                              <option value="44735">Campus Recreation Center (CRC)</option>
                              <option value="44894">Campus Renewal</option>
                              <option value="44832">Campus Renewal</option>
                              <option value="28230">CanSat Club</option>
                              <option value="27877">Capoeira Cordao de Ouro</option>
                              <option value="44729">CARE on Campus</option>
                              <option value="28114">Career Fair Committee</option>
                              <option value="44909">Career Fair Committee at Georgia Tech</option>
                              <option value="27781">Caribbean Students Association</option>
                              <option value="27955">Cashflow Club</option>
                              <option value="28209">Catholic Student Organization</option>
                              <option value="44678">CERT</option>
                              <option value="44716">Chabad Jewish Student Group at Georgia Tech</option>
                              <option value="28102">Chamber Choir</option>
                              <option value="27878">Chess Club at Georgia Tech</option>
                              <option value="27824">Chi Alpha</option>
                              <option value="28028">Chi Epsilon (Civil Engineering Honor Society)</option>
                              <option value="28139">Chi Phi</option>
                              <option value="28156">Chi Psi</option>
                              <option value="28250">Chief Engineering Officers</option>
                              <option value="27956">Child Rights and You</option>
                              <option value="28274">China Care Club</option>
                              <option value="27782">Chinese Friendship Association</option>
                              <option value="44845">Chinese Soccer Club</option>
                              <option value="27783">Chinese Student Association</option>
                              <option value="27854">Chorale</option>
                              <option value="28189">Christian Campus Fellowship</option>
                              <option value="27825">Christian Students</option>
                              <option value="44778">CHYK West </option>
                              <option value="27957">Circle K</option>
                              <option value="44732">Classical Music Network</option>
                              <option value="28244">Climbing Club</option>
                              <option value="44838">Club Basketball</option>
                              <option value="28195">Club Math</option>
                              <option value="44756">Club Speedball </option>
                              <option value="27920">Club Tennis</option>
                              <option value="44899">Club Track and Field</option>
                              <option value="44773">CodeGuardian </option>
                              <option value="44792">Collaborative Homelessness Initiative (CHI)</option>
                              <option value="27879">Collectible Card Games Club</option>
                              <option value="27958">College Democrats</option>
                              <option value="44956">College Diabetes Network at Georgia Tech</option>
                              <option value="27959">College Republicans</option>
                              <option value="27960">Colleges Against Cancer</option>
                              <option value="28185">Collegians for a Constructive Tomorrow</option>
                              <option value="27943">Collegiate Panhellenic Council</option>
                              <option value="44903">Combatives Club</option>
                              <option value="44897">Community for the Support of Women in Aerospace Program </option>
                              <option value="40405">Community Service Council</option>
                              <option value="44972">Construction Engineering Association</option>
                              <option value="44841">Consult Your Community (CYC)</option>
                              <option value="28238">Cooks for Heritage, Education, Fellowship, and Service</option>
                              <option value="28297">Cooperative Student Fellowship </option>
                              <option value="44816">Cordao de Ouro Capoeira</option>
                              <option value="44788">Costume Design Community at Georgia Tech</option>
                              <option value="27880">Cricket Club</option>
                              <option value="27821">Cru</option>
                              <option value="28099">CSPM Test Club</option>
                              <option value="44745">Cuban American Student Association</option>
                              <option value="28245">Cultural Council</option>
                              <option value="44850">Culture Union</option>
                              <option value="27881">Cycling</option>
                              <option value="44979">D.R.E.A.M. (Designing with Real Engineers And Mentors)</option>
                              <option value="27882">Dance Association</option>
                              <option value="44757">Dance Company at Georgia Tech</option>
                              <option value="27883">DanceTech</option>
                              <option value="44934">Data Science at GT</option>
                              <option value="27963">Debate Team</option>
                              <option value="28140">Delta Chi</option>
                              <option value="28256">Delta Epsilon Iota Academic Honor Society</option>
                              <option value="28120">Delta Phi Lambda Sorority, Inc.</option>
                              <option value="28141">Delta Sigma Phi</option>
                              <option value="44883">Delta Sigma Pi</option>
                              <option value="28152">Delta Sigma Theta Sorority, Inc.</option>
                              <option value="28157">Delta Tau Delta</option>
                              <option value="28158">Delta Upsilon</option>
                              <option value="44827">Design for America </option>
                              <option value="28278">DesigNation</option>
                              <option value="27785">Devoting the Energies of Men Interested in Social Enlightenment</option>
                              <option value="27884">Disc Golf Club</option>
                              <option value="44676">Discipleship International</option>
                              <option value="27786">Diversity Forum</option>
                              <option value="28115">Dodgeball</option>
                              <option value="27855">DramaTech Theatre</option>
                              <option value="44808">Dream Corps</option>
                              <option value="28052">Earthquake Engineering Research Institute</option>
                              <option value="28053">ECE Student Faculty Committee</option>
                              <option value="44989">Eco Marathon</option>
                              <option value="28248">EcoCar Team</option>
                              <option value="28054">Economics Club at Georgia Tech</option>
                              <option value="44977">Egyptian Student Association (ESA)</option>
                              <option value="44936">Electrical &amp; Computer Engineering Graduate Student Organization</option>
                              <option value="44997">Electro-Chemical Society</option>
                              <option value="28055">Electrochemical Society</option>
                              <option value="44789">Electrolyzed Reduced Water (ERW) Club</option>
                              <option value="44758">Electronic Music Collective </option>
                              <option value="28224">Electronica Appreciation Society</option>
                              <option value="27964">Emergency Medical Service</option>
                              <option value="44840">Emerging Leaders</option>
                              <option value="44994">Enchanted Encounters</option>
                              <option value="28261">Energy Club at Georgia Tech</option>
                              <option value="44879">Engineering In Medicine and Biology </option>
                              <option value="44966">Engineering in Medicine and Biology (EMBS)</option>
                              <option value="44851">Engineering Pre-Health </option>
                              <option value="27965">Engineering World Health</option>
                              <option value="28296">Engineers for a Sustainable World at Georgia Tech</option>
                              <option value="27966">Engineers Without Borders- Georgia Tech</option>
                              <option value="33836">Enterprise to Empower</option>
                              <option value="27968">Entertainment Software Producers</option>
                              <option value="44964">Entrepreneurship Club</option>
                              <option value="28253">Entrepreneurship Society for Professionals</option>
                              <option value="27969">Environmental Alliance</option>
                              <option value="44831">Epic Intentions </option>
                              <option value="27885">Equestrian Club</option>
                              <option value="27856">Erato</option>
                              <option value="36070">Esports at Georgia Tech</option>
                              <option value="28029">Eta Kappa Nu</option>
                              <option value="27787">Ethiopian and Eritrean Student Association</option>
                              <option value="28299">Evening MBA Consulting Club</option>
                              <option value="27826">Every Nation Campus Ministrie</option>
                              <option value="28217">Evolution Crew</option>
                              <option value="28056">Executive Round Table</option>
                              <option value="44913">Executive Round Table</option>
                              <option value="28280">Expedition Club</option>
                              <option value="28283">Eye to Eye</option>
                              <option value="44705">Faith on Campus</option>
                              <option value="28199">Fastpitch Softball Club</option>
                              <option value="44888">Fearless, Young, &amp; Excellent</option>
                              <option value="27827">Fellowship of Christian Graduate Students</option>
                              <option value="27828">Fellowship of Christian Students</option>
                              <option value="44830">Fellowship of Christian Students (FCS)</option>
                              <option value="44720">Feminist Majority Leadership Alliance (FMLA)</option>
                              <option value="28133">Field Hockey Club</option>
                              <option value="27788">Filipino Student Association</option>
                              <option value="44751">Film Club</option>
                              <option value="27789">Film Society</option>
                              <option value="44719">FirstGen</option>
                              <option value="44998">FirstGen</option>
                              <option value="44763">Flow at Tech </option>
                              <option value="28301">Food for the Forgotten</option>
                              <option value="27962">For the Kids</option>
                              <option value="28057">Forensic Science Club</option>
                              <option value="27971">Foundation for International Medical Relief of Children</option>
                              <option value="27972">Fountain of Youth</option>
                              <option value="44689">Four Square Club</option>
                              <option value="27790">French Club</option>
                              <option value="27886">Freshman Activities Board</option>
                              <option value="27973">Freshman Council</option>
                              <option value="44395">Freshman Foundation</option>
                              <option value="44780">Freshman Servant Leadership Organization (FSLO)</option>
                              <option value="28058">Fulbright Student Association</option>
                              <option value="28255">Future Educators Association</option>
                              <option value="44926">Future Fashion Leaders</option>
                              <option value="28103">Gamers Guild</option>
                              <option value="28285">GAMMA</option>
                              <option value="27974">Gamma Beta Mu Leadership Society at Georgia Tech</option>
                              <option value="28030">Gamma Beta Phi</option>
                              <option value="44970">Geometry Club</option>
                              <option value="33374">Georgia Outreach: Advancing the Lives of the Special-needs</option>
                              <option value="27869">Georgia Tech Amateur Radio Club</option>
                              <option value="44785">Georgia Tech Data Analytics</option>
                              <option value="44858">Georgia Tech Fly Fishing Club</option>
                              <option value="44779">Georgia Tech Gaelic Sports and Heritage Club </option>
                              <option value="44781">Georgia Tech Go Club</option>
                              <option value="44765">Georgia Tech Guitar Club</option>
                              <option value="44755">Georgia Tech Modeling Vision</option>
                              <option value="44820">Georgia Tech Peer Counseling</option>
                              <option value="44920">Georgia Tech Pottery Club</option>
                              <option value="44784">Georgia Tech Science Society</option>
                              <option value="27976">German Club at Georgia Tech</option>
                              <option value="28203">Glee Club</option>
                              <option value="41078">Global Business Brigades</option>
                              <option value="28201">Global H.E.E.D.</option>
                              <option value="27784">Global Jackets</option>
                              <option value="44971">Global Medical Missions Alliance</option>
                              <option value="27830">Global Outreach Campus Ministries</option>
                              <option value="27829">God's Influence Flowing Through Every Disciple</option>
                              <option value="27887">Golf Club</option>
                              <option value="27858">Gourd: Visual Artists</option>
                              <option value="41921">Grace Midtown Students</option>
                              <option value="44868">Graduate Association of Physicists</option>
                              <option value="27977">Graduate Business Council</option>
                              <option value="28059">Graduate Evening MBA Students</option>
                              <option value="27791">Graduate Minorities in Business</option>
                              <option value="27751">Graduate Student Government Association</option>
                              <option value="44711">Graduate Women in Business</option>
                              <option value="28251">Grappling and Brazilian Jiu-Jitsu Club</option>
                              <option value="44848">Great Conversations</option>
                              <option value="44771">Greek Programming Board</option>
                              <option value="44985">Greek Sustainability Committee</option>
                              <option value="27978">Gringos y Latinos: Atlanta's Spanish Service Society</option>
                              <option value="44805">Gringos y Latinos: Atlanta's Spanish Service Society </option>
                              <option value="27893">GT Motorsports</option>
                              <option value="27892">GT Off-road</option>
                              <option value="44750">GT Powerlifting</option>
                              <option value="44728">GT Pulse</option>
                              <option value="27911">GT Solar Racing</option>
                              <option value="28129">Gymnastics</option>
                              <option value="44659">Habitat for Humanity</option>
                              <option value="44813">Handball Team </option>
                              <option value="44811">Hapkido</option>
                              <option value="44933">Hellenic Society</option>
                              <option value="27792">Hellenic Society</option>
                              <option value="28227">HEROs at Tech</option>
                              <option value="27831">Hillel</option>
                              <option value="28290">Hindu Youth for Unity, Virtues, and Action</option>
                              <option value="28182">Hispanic Recruitment Team</option>
                              <option value="27980">Hispanic Scholarship Fund</option>
                              <option value="44912">Hong Kong Student Association</option>
                              <option value="27793">Hong Kong Student Association</option>
                              <option value="27981">Honor Advisory Council</option>
                              <option value="28111">Honorary Accounting Organization</option>
                              <option value="44762">Human Development Organization </option>
                              <option value="28060">Human Factors and Ergonomics Society</option>
                              <option value="27982">Humanitech</option>
                              <option value="44896">Hurling and Gaelic Football Club at GT </option>
                              <option value="44686">HyTech Racing</option>
                              <option value="27888">Ice Hockey Club</option>
                              <option value="28262">iGem Team</option>
                              <option value="28061">Illuminating Engineering Society of North America</option>
                              <option value="44930">Impact Movement at Georgia Tech</option>
                              <option value="27889">In-Line Roller Hockey Club</option>
                              <option value="27794">India Club at Georgia Tech</option>
                              <option value="27795">Indonesian Student Association</option>
                              <option value="28197">Industrial Designers Society of America at Georgia Tech</option>
                              <option value="27859">Infinite Harmony</option>
                              <option value="44770">INFORMS Student Chapter</option>
                              <option value="28226">Initiative for Development and Education in Africa</option>
                              <option value="44682">Institute for Healthcare Improvement (IHI) Open School at Georgia Tech</option>
                              <option value="28204">Institute of Electrical and Electronics Engineers</option>
                              <option value="28071">Institute of Industrial Engineers</option>
                              <option value="44804">Institute of Nuclear Materials Management</option>
                              <option value="44753">Institute of Nuclear Materials Management Student Chapter at Georgia Tech </option>
                              <option value="44987">Institute of Transportation Engineers</option>
                              <option value="44661">Institute of Transportation Engineers at Georgia Tech</option>
                              <option value="44889">Inteha</option>
                              <option value="44880">Intellectual Property Student Organization</option>
                              <option value="44901">Intelligent Transportation Society of America</option>
                              <option value="44953">Interfaith Dialogue &amp; Engagement Alliance (IDEA)</option>
                              <option value="27941">Interfraternity Council</option>
                              <option value="28072">International Affairs Graduate Organization</option>
                              <option value="28225">International Affairs Student Organization</option>
                              <option value="44767">International Ambassadors at Georgia Tech</option>
                              <option value="28177">International Association for the Exchange of Students for Technical Experience</option>
                              <option value="28213">International Business Club</option>
                              <option value="44733">International Justice Mission Campus Chapter</option>
                              <option value="28211">International Youth Fellowship</option>
                              <option value="44796">Intramurals</option>
                              <option value="44999">Invention Studio</option>
                              <option value="44865">Invention Studio at Georgia Tech</option>
                              <option value="27983">Invisible Children</option>
                              <option value="27796">Iranian Student Association</option>
                              <option value="44669">ISYE Ambassadors at Georgia Tech</option>
                              <option value="28073">IT Society - MBA</option>
                              <option value="28074">Ivan Allen College Student Advisory Board</option>
                              <option value="44968">Ivan Allen College Undergraduate Student Advisory Board</option>
                              <option value="44923">Jacket Films</option>
                              <option value="42390">Jackets for Israel</option>
                              <option value="27797">Japan Society</option>
                              <option value="44941">Japan Student Association</option>
                              <option value="44726">Jazba</option>
                              <option value="44938">Jazba Bhangra</option>
                              <option value="28110">Joint Finance Committee</option>
                              <option value="27832">Joshua Generation</option>
                              <option value="44718">JOULE</option>
                              <option value="27833">Journey Christian Fellowship</option>
                              <option value="44746">Junior STEM</option>
                              <option value="44929">Justice Together GT</option>
                              <option value="28159">Kappa Alpha Order</option>
                              <option value="28148">Kappa Alpha Psi</option>
                              <option value="28031">Kappa Kappa Psi (Music)</option>
                              <option value="28160">Kappa Sigma</option>
                              <option value="27876">Kayak and Canoe Club</option>
                              <option value="27984">Kids@Kollege</option>
                              <option value="28303">Korea Campus Crusade for Christ</option>
                              <option value="44663">Korean American Scientists and Engineers Association - Young Generation</option>
                              <option value="44795">Korean Computer Science</option>
                              <option value="44854">Korean Industrial Design Students (KIDS)</option>
                              <option value="43095">Korean International Young Adults Community</option>
                              <option value="27799">Korean Student Association</option>
                              <option value="27798">Korean Undergraduate Student Association</option>
                              <option value="27800">La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.</option>
                              <option value="44688">Lab Jackets at Georgia Tech</option>
                              <option value="28142">Lambda Chi Alpha</option>
                              <option value="28032">Lambda Sigma</option>
                              <option value="28122">Lambda Theta Alpha Latin Soroity, Inc.</option>
                              <option value="28121">Lambda Upsilon Lmbda</option>
                              <option value="44715">Latin American Student Association</option>
                              <option value="28207">Latino Organization of Graduate Students</option>
                              <option value="28178">Latino Student Organizations</option>
                              <option value="27834">Latter-Day Saint Student Association</option>
                              <option value="27986">LeaderShape-GT</option>
                              <option value="44697">League of Legends at Georgia Tech</option>
                              <option value="44931">Lean In at GT</option>
                              <option value="27801">Lebanese Club</option>
                              <option value="44908">Letter of Intent</option>
                              <option value="44675">Liberty in North Korea</option>
                              <option value="27987">Linux Users Group</option>
                              <option value="44701">Lions Club at Georgia Tech</option>
                              <option value="44910">Literary Society</option>
                              <option value="44734">Living in Faith Together (LIFT)</option>
                              <option value="27802">Lotus</option>
                              <option value="44749">Luke 18 Project </option>
                              <option value="27835">Lutheran Campus Ministry</option>
                              <option value="44707">Magic: The Gathering Club at Georgia Tech</option>
                              <option value="27860">Magicians at Georgia Tech</option>
                              <option value="44691">Mahjong Club at Georgia Tech</option>
                              <option value="28305">Maker's Club</option>
                              <option value="28188">Management Consulting Club</option>
                              <option value="44772">Management Information Systems Club</option>
                              <option value="44821">MAPS (Minority Association of Pre-Medical Students)</option>
                              <option value="28264">Marine Robotics Group</option>
                              <option value="28075">Marketing Club</option>
                              <option value="27891">Marksmanship Club</option>
                              <option value="27988">Mars Society @ Georgia Tech</option>
                              <option value="44668">Materials Research Society at Georgia Tech</option>
                              <option value="44911">MBA Consulting Club</option>
                              <option value="44786">MBA Entrepreneurship Club</option>
                              <option value="28260">MBA Healthcare Club</option>
                              <option value="44965">MBA Women in Business</option>
                              <option value="44783">MD Junior</option>
                              <option value="28076">Mechanical Engineering Graduate Student Association</option>
                              <option value="28259">Mechanical Engineering Maker's Club</option>
                              <option value="44717">Medical Device Entrepreneurship Association at Georgia Tech</option>
                              <option value="44666">Meditation Club</option>
                              <option value="28295">MEDLIFE</option>
                              <option value="28131">Men's Club Lacrosse</option>
                              <option value="27909">Men's Club Soccer</option>
                              <option value="27903">Men's Rugby</option>
                              <option value="27923">Men's Ultimate Frisbee</option>
                              <option value="27927">Men's Water Polo Club</option>
                              <option value="27925">Mens Club Volleyball</option>
                              <option value="44974">Mental Health Student Coalition</option>
                              <option value="27990">Mobilizing Opportunities for Volunteer Experiences</option>
                              <option value="27989">Mock Trial</option>
                              <option value="44950">Modern Molecular Medicine</option>
                              <option value="44978">Molecular Gastronomists</option>
                              <option value="44671">Motorcycle Club</option>
                              <option value="28246">MOVE - CORe (City of Refuge)</option>
                              <option value="28066">MOVE - Partners in Education</option>
                              <option value="28294">Movie Buzz</option>
                              <option value="44866">Muay Thai Kickboxing</option>
                              <option value="34359">Muggle Quidditch at Georgia Tech</option>
                              <option value="27803">Multicultural Greek Council</option>
                              <option value="33373">Multiple Sclerosis Awareness Club</option>
                              <option value="27861">Music Production Enclave</option>
                              <option value="27894">Musician's Network</option>
                              <option value="27837">Muslim Students Association</option>
                              <option value="44654">N/A</option>
                              <option value="28190">National Model UN Club at Georgia Tech</option>
                              <option value="44743">National Organization for Business and Engineering </option>
                              <option value="28109">National Organization for the Professional Advancement of Black Chemists and Chemical Engineers</option>
                              <option value="28077">National Organization of Minority Architecture Students</option>
                              <option value="27942">National Pan-Hellenic Council</option>
                              <option value="28078">National Society of Black Engineers</option>
                              <option value="28033">National Society of Collegiate Scholars</option>
                              <option value="44834">National Society of Leadership and Success (Sigma Alpha Pi)</option>
                              <option value="28079">National Society of Professional Engineers</option>
                              <option value="27838">Natural Path Meditation Club</option>
                              <option value="28216">Natural Science Career Fair</option>
                              <option value="27839">Navigators at Georgia Tech</option>
                              <option value="44702">Navy at Tech</option>
                              <option value="27804">Nazaaqat</option>
                              <option value="44736">Nepali Club</option>
                              <option value="44895">Nerdy Bones </option>
                              <option value="27991">Net Impact</option>
                              <option value="44954">Neurodiversity Club</option>
                              <option value="41076">Neuroscience Club</option>
                              <option value="27840">Nichiren Buddhist Student Association</option>
                              <option value="44963">No Labels @ GT</option>
                              <option value="44849">North Avenue Billiards</option>
                              <option value="28205">North Avenue Review</option>
                              <option value="44875">Nourish International</option>
                              <option value="44937">Obstacle Course Racing Club</option>
                              <option value="28191">Off-Campus Jackets</option>
                              <option value="44906">office of lead &amp; engage</option>
                              <option value="27750">Office of Leadership &amp; Civic Engagement</option>
                              <option value="44902">OLCE</option>
                              <option value="28034">Omega Chi Epsilon</option>
                              <option value="44952">Omega Delta Phi Fraternity, Inc.</option>
                              <option value="28116">Omega Phi Alpha</option>
                              <option value="28149">Omega Psi Phi</option>
                              <option value="28200">Omicron Delta Epsilon</option>
                              <option value="28035">Omicron Delta Kappa</option>
                              <option value="28219">ONE Campaign @ GT</option>
                              <option value="27992">One Voice Atlanta</option>
                              <option value="27841">Operation Seventh-Day Adventist</option>
                              <option value="44817">Operation Smile Georgia Tech</option>
                              <option value="28080">Operations Management Society</option>
                              <option value="44700">Optionivores - quit chartering process</option>
                              <option value="28036">Order of Omega</option>
                              <option value="28081">Order of the Engineer</option>
                              <option value="44869">Order of the Engineer</option>
                              <option value="27895">Origami Club</option>
                              <option value="27842">Orthodox Christian Fellowship</option>
                              <option value="44881">Our Stars</option>
                              <option value="44712">Out for Science, Technology, Engineering, and Math</option>
                              <option value="28104">Outdoor Recreation</option>
                              <option value="28002">Oxfam at GT</option>
                              <option value="44844">P.A.U.S.E. </option>
                              <option value="27896">Paintball Club</option>
                              <option value="27805">Pakistani Student Association</option>
                              <option value="40413">Panamanian Students</option>
                              <option value="44957">Partnership @ GT</option>
                              <option value="44833">Peak Performance Fitness</option>
                              <option value="44864">Pending - Moneythink</option>
                              <option value="27897">Pending - Photography Club</option>
                              <option value="27939">Pending Organizations</option>
                              <option value="27811">Pending- Spanish Speaking Organization</option>
                              <option value="44846">People Against Unwanted Sexual Experiences</option>
                              <option value="44815">PhD 2 Consulting Club</option>
                              <option value="28082">Phi Alpha Delta</option>
                              <option value="44860">Phi Beta Lambda</option>
                              <option value="28150">Phi Beta Sigma Fraternity, Inc.</option>
                              <option value="28161">Phi Delta Theta</option>
                              <option value="28162">Phi Gamma Delta</option>
                              <option value="28163">Phi Kappa Psi</option>
                              <option value="28143">Phi Kappa Sigma</option>
                              <option value="28164">Phi Kappa Tau</option>
                              <option value="28165">Phi Kappa Theta</option>
                              <option value="28134">Phi Mu</option>
                              <option value="28083">Phi Psi National Textile Fraternity</option>
                              <option value="28166">Phi Sigma Kappa</option>
                              <option value="44988">Phi Sigma Pi</option>
                              <option value="28037">Phi Sigma Pi - Honor Fraternity</option>
                              <option value="28038">Pi Epsilon Phi</option>
                              <option value="28167">Pi Kappa Alpha</option>
                              <option value="28168">Pi Kappa Phi</option>
                              <option value="28039">Pi Tau Sigma (Mechanical Engineering)</option>
                              <option value="28249">Planetary Society</option>
                              <option value="44748">Poetry Club</option>
                              <option value="28304">Poker Club</option>
                              <option value="44874">Political Science and Human Rights Club </option>
                              <option value="44731">Por Colombia</option>
                              <option value="27993">Pre-Dental Society</option>
                              <option value="44812">Pre-Optometry Student Association </option>
                              <option value="28084">Pre-Pharmacy Student Association</option>
                              <option value="44713">Pre-Physician Assistant Club at Georgia Tech</option>
                              <option value="28293">Pre-Veterinary Medical Association</option>
                              <option value="27940">Presidents' Council Governing Board</option>
                              <option value="27806">Pride Alliance</option>
                              <option value="27994">Project H.O.N.O.R.</option>
                              <option value="28300">Project K</option>
                              <option value="44859">Project Pengyou</option>
                              <option value="28085">Prometheus</option>
                              <option value="44940">Promoting Applied Physiology Education and Research</option>
                              <option value="44939">Promoting Applied Physiology Education and Research (PAPER)</option>
                              <option value="28086">Promoting Orthotics and Prosthetics</option>
                              <option value="44967">Prototyping and Circuits Education (PACE)</option>
                              <option value="28040">Psi Chi (Psychology Honor Society)</option>
                              <option value="28169">Psi Upsilon</option>
                              <option value="44664">Psychology Club</option>
                              <option value="28236">Public Policy Graduate Student Association</option>
                              <option value="44891">Public Policy Student Association</option>
                              <option value="27995">Public Speaking Club</option>
                              <option value="44867">Puerto Rican Student Association </option>
                              <option value="27807">Puerto Rican Student Association</option>
                              <option value="44948">Puerto Rican Student Association (PRiSA)</option>
                              <option value="44721">QCF Quants</option>
                              <option value="44652">Quill and Laptop</option>
                              <option value="27808">Qurbani</option>
                              <option value="28130">Racquetball Club</option>
                              <option value="44690">Rally Foundation at Georgia Tech</option>
                              <option value="27996">Ramblin Wreck Real Estate</option>
                              <option value="27899">Ramblin' Raas</option>
                              <option value="27898">Ramblin' Reck Club</option>
                              <option value="27900">Ramblin' Rocket Club</option>
                              <option value="27997">Rebuilding and Initiating Sisterhood and Enlightenment</option>
                              <option value="27843">Reformed University Fellowship</option>
                              <option value="27998">Relay For Life</option>
                              <option value="44969">Research &amp; Networking Society</option>
                              <option value="27754">Residence Hall Association</option>
                              <option value="44918">Resource and Insurance Navigators Group (RING)</option>
                              <option value="44737">Rethink</option>
                              <option value="27809">Rho Epsilon Delta</option>
                              <option value="34675">Ripple Effect</option>
                              <option value="44887">Robogals</option>
                              <option value="28266">RoboGrads</option>
                              <option value="27901">RoboJackets</option>
                              <option value="44893">Roller Hockey</option>
                              <option value="27999">Roosevelt Institute</option>
                              <option value="27902">Rowing Club</option>
                              <option value="44924">Rubik's Cube Club at Georgia Tech</option>
                              <option value="27904">Runnin' Wreck</option>
                              <option value="27810">Russian Culture Club</option>
                              <option value="44802">SAI Young Adults at Georgia Tech</option>
                              <option value="27905">Sailing Club</option>
                              <option value="27906">Salsa Club</option>
                              <option value="45000">Satrangi</option>
                              <option value="28231">Saudi Student Association</option>
                              <option value="44921">Saudi Student Organization at Georgia Tech (SASO)</option>
                              <option value="44927">Scheller Marketing Association</option>
                              <option value="28206">Scheller Marketing Association</option>
                              <option value="44790">Scheller Net Impact Graduate Chapter (GT Net Impact Graduate Chaper)</option>
                              <option value="44768">Scheller Society of Entrepreneurs</option>
                              <option value="27907">SCUBA Tech</option>
                              <option value="28235">Security Enthusiast's Club</option>
                              <option value="44696">Seed</option>
                              <option value="44819">ServiTech</option>
                              <option value="44835">Settlers of Georgia Tech</option>
                              <option value="44898">She's the First </option>
                              <option value="44949">Shivam and Varun &lt;3 </option>
                              <option value="28170">Sigma Alpha Epsilon</option>
                              <option value="44680">Sigma Alpha Lambda</option>
                              <option value="28123">Sigma Beta Rho Fraternity Inc.</option>
                              <option value="28171">Sigma Chi</option>
                              <option value="28153">Sigma Gamma Rho</option>
                              <option value="44960">Sigma Gamma Rho Sorority, Inc.</option>
                              <option value="44993">Sigma Gamma Tau</option>
                              <option value="28041">Sigma Gamma Tau (Aerospace)</option>
                              <option value="28042">Sigma Iota Rho International Affairs Honor Society</option>
                              <option value="28172">Sigma Nu</option>
                              <option value="28144">Sigma Phi Epsilon</option>
                              <option value="28176">Sigma Pi</option>
                              <option value="28124">Sigma Sigma Rho</option>
                              <option value="44761">SilverWings at Georgia Tech</option>
                              <option value="27908">Skateboard Club</option>
                              <option value="44683">SkepTech</option>
                              <option value="44882">Smash Jackets</option>
                              <option value="44914">Smite Club at Georgia Tech</option>
                              <option value="44814">Society for Biomaterials</option>
                              <option value="44803">Society of American Military Engineers</option>
                              <option value="28267">Society of Asian Scientists and Engineers</option>
                              <option value="28087">Society of Hispanic Professional Engineers @ GT</option>
                              <option value="41996">Society of Manufacturing Engineers</option>
                              <option value="44684">Society of Marketing Professional Services (SMPS)</option>
                              <option value="44907">Society of Physics Students</option>
                              <option value="28088">Society of Physics Students</option>
                              <option value="28107">Society of Plastics Engineers</option>
                              <option value="27863">Society of Step (Inactive)</option>
                              <option value="28089">Society of Women Engineers</option>
                              <option value="28090">Society of Women in Business</option>
                              <option value="44877">Society of Women in Physics</option>
                              <option value="44942">Solar Decathlon</option>
                              <option value="43097">Sophomore Leadership Council</option>
                              <option value="44769">Southeast Asian Student Association </option>
                              <option value="44861">SPIE (The International Society for Optics and Photonics) Student Chapter</option>
                              <option value="44876">Spoon University</option>
                              <option value="28132">Sport Parachute Club</option>
                              <option value="44904">Sports Business Club</option>
                              <option value="44917">Squash Club</option>
                              <option value="44984">Squash Club</option>
                              <option value="28291">Stamps Health Services Ambassadors</option>
                              <option value="28000">STAND - Student Anti-Genocide Coalition</option>
                              <option value="44842">Starter Bikes</option>
                              <option value="41143">StartUp</option>
                              <option value="44853">Sting Hunger</option>
                              <option value="28091">Student Activities Board for the College of Computing</option>
                              <option value="28194">Student Activities Board for Undergraduate Research</option>
                              <option value="28215">Student Affiliates of the American Chemical Society</option>
                              <option value="44649">Student Alumni Association</option>
                              <option value="28101">Student Center</option>
                              <option value="27913">Student Center Programs Council</option>
                              <option value="28106">Student Construction Association</option>
                              <option value="27975">Student Foundation</option>
                              <option value="27752">Student Government Association</option>
                              <option value="44818">Student Government Association</option>
                              <option value="28001">Student Hospital Connections</option>
                              <option value="44782">Student Music Advisory</option>
                              <option value="44809">Student Organization Finance Office</option>
                              <option value="28092">Student Planning Association</option>
                              <option value="44916">Student Polymer Network @ GT</option>
                              <option value="44810">Student Publications</option>
                              <option value="44990">Student Publications</option>
                              <option value="44759">Student Veterans of America at Georgia Tech</option>
                              <option value="44852">Students Consulting For Nonprofit Organizations (SCNO)</option>
                              <option value="27844">Students for Christ</option>
                              <option value="44725">Students for Classical Architecture</option>
                              <option value="44693">Students for Concealed Carry on Campus</option>
                              <option value="44714">Students for Exploration and Development of Space Society</option>
                              <option value="28003">Students for Justice in Palestine</option>
                              <option value="28004">Students for Life</option>
                              <option value="28221">Students for Progressive Transit</option>
                              <option value="28237">Students in Free Enterprise</option>
                              <option value="28223">Students Observing and Researching Meteorology</option>
                              <option value="28005">Students of Objectivism</option>
                              <option value="28006">Students Organizing for Fair Tax</option>
                              <option value="28007">Students Organizing for Sustainability</option>
                              <option value="28008">Students Working Against Negative Stereotypes of Autism</option>
                              <option value="44955">Supply Chain &amp; Logistics Club</option>
                              <option value="27914">Surf Club</option>
                              <option value="44806">Surface Mount Technology Association </option>
                              <option value="27916">Swim Club @ GT</option>
                              <option value="27864">Symphony Orchestra</option>
                              <option value="44670">Synergy</option>
                              <option value="27865">T-Book</option>
                              <option value="28298">Taal Tadka</option>
                              <option value="27918">Table Tennis Association at Georgia Tech</option>
                              <option value="34270">Tactical Gameplay</option>
                              <option value="27812">Taiwanese American Student Association</option>
                              <option value="28239">Taiwanese Student Association</option>
                              <option value="28254">Tathagata Buddhist Student Association</option>
                              <option value="27845">Tau Alpha Omega</option>
                              <option value="28043">Tau Beta Pi</option>
                              <option value="28044">Tau Beta Sigma</option>
                              <option value="28173">Tau Kappa Epsilon</option>
                              <option value="28009">TEAM Buzz</option>
                              <option value="42169">Team in Training</option>
                              <option value="28010">Tech Beautification Day</option>
                              <option value="40543">Tech Cares</option>
                              <option value="44727">Tech The Halls</option>
                              <option value="44826">Techathlon</option>
                              <option value="44822">TechList</option>
                              <option value="44958">Technical Association of Pulp and Paper Industry</option>
                              <option value="28093">Technical Association of Pulp and Paper Industry- Undergraduate Chapter</option>
                              <option value="28252">Technical Association of the Pulp and Paper Industry- Graduate Chapter</option>
                              <option value="44823">Technical Interview Preparation</option>
                              <option value="44890">TEDxDouglasville</option>
                              <option value="44961">TEDxGeorgiaTech</option>
                              <option value="27919">Tekstyles</option>
                              <option value="44787">Test</option>
                              <option value="44878">Test</option>
                              <option value="44982">Test #45</option>
                              <option value="44983">Test Org #1</option>
                              <option value="44981">Test Organization - Decker October 23</option>
                              <option value="44856">TEST: Crepes for Days : TEST</option>
                              <option value="44793">Tester</option>
                              <option value="27813">Thai Student Organization</option>
                              <option value="45001">The Agency</option>
                              <option value="44947">The Campus Kitchen Project</option>
                              <option value="28268">The Fourth R: Human Rights Education</option>
                              <option value="44843">The Gold Standard Club</option>
                              <option value="28233">The Instrumental Project</option>
                              <option value="27836">The Living Room</option>
                              <option value="28276">The Pioneer</option>
                              <option value="44687">The Semper Fi Society at Georgia Tech</option>
                              <option value="27866">The Technique</option>
                              <option value="28210">The Tower</option>
                              <option value="28275">The Triple Helix, Inc</option>
                              <option value="27847">The Veritas Forum</option>
                              <option value="28288">The Wells Project</option>
                              <option value="28240">The Worker Student Alliance</option>
                              <option value="28174">Theta Chi</option>
                              <option value="28175">Theta Xi</option>
                              <option value="44777">To Write Love on Her Arms</option>
                              <option value="28270">TOMS Campus Club</option>
                              <option value="28241">Track and Field Club</option>
                              <option value="27921">Traditional Taekwon-Do Club</option>
                              <option value="44704">Trail and Ultra Running Club at Georgia Tech</option>
                              <option value="28011">Trailblazers</option>
                              <option value="44799">Transfer Student Association</option>
                              <option value="44847">Triangle</option>
                              <option value="27922">Triathlon Club at Georgia Tech</option>
                              <option value="44885">Tricking Club at Georgia Tech</option>
                              <option value="44738">TRUST</option>
                              <option value="44760">Tumor Troopers Youth Group</option>
                              <option value="27814">Turkish Student Organization</option>
                              <option value="44723">Tzu Ching</option>
                              <option value="28012">Undergraduate Consulting Club</option>
                              <option value="27758">Undergraduate House</option>
                              <option value="44946">Undergraduate Operations Management Society</option>
                              <option value="27917">Underwater Hockey</option>
                              <option value="44677">UNICEF at Georgia Tech</option>
                              <option value="44825">Unicycling Club </option>
                              <option value="44986">Unicycling Club</option>
                              <option value="28013">Unite for Sight</option>
                              <option value="28284">United States Marine Corps Semper Fi Society</option>
                              <option value="44884">Unmanned Flying Club</option>
                              <option value="44915">Uplifting Athletes: Georgia Tech</option>
                              <option value="28094">Upsilon Pi Epsilon (Computer Science)</option>
                              <option value="44740">Valuation &amp; Investments Process Club (VIP Club)</option>
                              <option value="28218">Vegetarian Society</option>
                              <option value="44870">Veritas Forum at Georgia Tech</option>
                              <option value="44943">Veterans MBA Club</option>
                              <option value="44747">VGDev</option>
                              <option value="27815">Vibha</option>
                              <option value="44873">Victory Road Pokemon at Georgia Tech</option>
                              <option value="27816">Vietnamese Student Association</option>
                              <option value="28273">VisAbility Volunteers</option>
                              <option value="44667">Vitalis Colony of Alpha Rho Chi Fraternity, Inc. at Georgia Tech</option>
                              <option value="28247">Vocal Organizations Collective Alliance</option>
                              <option value="44928">Volunteers Around the World </option>
                              <option value="27926">War-Gamers</option>
                              <option value="35844">Water Alliance</option>
                              <option value="44944">Water Research and Innovation Club</option>
                              <option value="27928">Waterski and Wakeboard at Georgia Tech</option>
                              <option value="27846">Way Campus Fellowship</option>
                              <option value="27848">Wesley Foundation</option>
                              <option value="28202">Westminster Christian Fellowship</option>
                              <option value="44951">Westminster Christian Fellowship (WCF)</option>
                              <option value="28014">What's In a Doctor's Bag</option>
                              <option value="44685">Why Should I Believe</option>
                              <option value="44900">Women @ College of Computing</option>
                              <option value="44996">Women in Architecture</option>
                              <option value="44995">Women in Architecture</option>
                              <option value="44694">Women in Architecture</option>
                              <option value="28095">Women in Electrical and Computer Engineering</option>
                              <option value="27817">Women's Awareness Month</option>
                              <option value="27929">Women's Club Basketball</option>
                              <option value="27890">Women's Club Lacrosse</option>
                              <option value="27910">Women's Club Soccer at Georgia Tech</option>
                              <option value="27931">Women's Club Volleyball @ GT</option>
                              <option value="28281">Women's Recruitment Team</option>
                              <option value="27930">Women's Rugby at Georgia Tech</option>
                              <option value="28096">Women's Transportation Seminar</option>
                              <option value="27924">Women's Ultimate Frisbee</option>
                              <option value="44919">Women's Water Polo</option>
                              <option value="28117">Womens Chorus</option>
                              <option value="28108">Womens Leadership Conference</option>
                              <option value="27818">World Student Fund Exchange Club</option>
                              <option value="27932">Wreck Racing</option>
                              <option value="41923">Wreckless</option>
                              <option value="27867">WREK Radio</option>
                              <option value="27933">Wrestling Club</option>
                              <option value="27934">Wushu Club</option>
                              <option value="28125">Xi Kappa</option>
                              <option value="27935">Yellow Jacket Archery Club</option>
                              <option value="27936">Yellow Jacket Baseball Club</option>
                              <option value="28113">Yellow Jacket Fencing Club</option>
                              <option value="27937">Yellow Jacket Flying Club</option>
                              <option value="44922">Yellow Jacket Space Program</option>
                              <option value="44692">Young Americans for Liberty</option>
                              <option value="28097">Young Entrepreneurs Society</option>
                              <option value="44730">Young Life College</option>
                              <option value="44836">Young Life College </option>
                              <option value="27951">Your Enlightened Side Plus</option>
                              <option value="27967">Youth Enrichment Program (YEP!)</option>
                              <option value="28258">Youth Evangelical Fellowship</option>
                              <option value="28015">Youth Outreach</option>
                              <option value="28179">Zeta Beta Tau</option>
                              <option value="28154">Zeta Phi Beta Sorority Inc.</option>
                              <option value="28135">Zeta Tau Alpha</option>
                            </optgroup>
                          </select>
                      </div>
                      <div className="input text required"><label for="BillDues">Dues - Please include how often dues are paid (per semester, per year, etc.)</label><input name="data_Bill_dues" maxlength="50" id="BillDues" required="required" type="text" /></div>
                      <div className="input text required"><label for="BillUgMembers">Number of Undergraduate Members</label><input name="data_Bill_ugMembers" maxlength="50" id="BillUgMembers" required="required" type="text" /></div>
                      <div className="input text required"><label for="BillGMembers">Number of Graduate Members</label><input name="data_Bill_gMembers" maxlength="50" id="BillGMembers" required="required" type="text" /></div>
                      <div className="input underAuthor_id required">
                          <label for="AuthorsUndrAuthId">Undergraduate Author</label>
                          <select name="data_Authors_undr_auth_id" id="AuthorsUndrAuthId">
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
                                  <option value="627">Niambh O'Neill -- Biology Representative</option>
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
                      </div>
                      <div className="input gradAuthor_id required">
                          <label for="AuthorsGradAuthId">Graduate Author</label>
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
                      </div>
                      <div className="multi_enter_line_items">
                          <h1>Add Line Items</h1>
                          <table className="listing" id="LineItemsTable">
                              <tbody>
                                  <tr>
                                      <th>#</th>
                                      <th width="400px">Name</th>
                                      <th>Cost (Each)</th>
                                      <th>Qty</th>
                                      <th>Total Cost</th>
                                      <th>Requested</th>
                                      <th>Account</th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  <tr>
                                      <td>
                                        <input name="data_0_LineItem_id" value="" className="LineItemId" id="LineItemId0" type="hidden" />
                                        <input name="data_0_LineItem_line_number" value="1" className="LineItemNumber" id="LineItemLineNumber0" type="hidden" />
                                        <label for="0LineItemNumber" value="1" className="LineItemNumber" id="LineNumber0">1</label>
                                      </td>
                                      <td>
                                        <input name="data_0_LineItem_name" className="LineItemName" id="LineItemName0" type="text" />
                                      </td>
                                      <td>
                                        <input name="data_0_LineItem_cost_per_unit" id="LineItemCostPerUnit0" className="LineItemCostPerUnit" onchange="updateTCAndRqstd(0)" type="text" />
                                      </td>
                                      <td>
                                        <input name="data_0_LineItem_quantity" id="LineItemQuantity0" className="LineItemQuantity" onchange="updateTCAndRqstd(0)" type="text" />
                                      </td>
                                      <td>
                                        <input name="data_0_LineItem_total_cost" id="LineItemTotalCost0" className="LineItemTotalCost" readonly="readonly" type="text" />
                                      </td>
                                      <td>
                                        <input name="data_0_LineItem_amount" id="LineItemAmount0" className="LineItemAmount" type="text" />
                                      </td>
                                      <td>
                                        <div className="input select">
                                          <select name="data_0_LineItem_account" id="LineItemAccount0" onchange="updateTCAndRqstd(0)" style={{ width: 125 }}>
                                            <option value="PY" title="For non-capital expenses" selected="selected">Prior Year</option>
                                            <option value="CO" title="For items lasting three or more years">Capital Outlay</option>
                                            <option value="ULR" title="Reserved for Undergraduate SGA">Undergraduate Legislative Reserve</option>
                                            <option value="GLR" title="Reserved for Graduate SGA">Graduate Legislative Reserve</option>
                                          </select>
                                        </div>
                                      </td>
                                      <td>
                                        <button type="button" onclick="moveUp(0)"><img src="jpcreatebill_files/up.gif" alt="Move Up" /></button></td>
                                      <td><button type="button" onclick="moveDown(0)"><img src="jpcreatebill_files/down.gif" alt="Move Down" /></button></td>
                                      <td><button type="button" onclick="addRow(0)"><img src="jpcreatebill_files/plus_sign.gif" alt="Add" /></button></td>
                                      <td><button type="button" onclick="deleteRow(0)"><img src="jpcreatebill_files/minus_sign.png" alt="Delete" /></button></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="submit"><input formnovalidate="formnovalidate" onclick="openToolTips()" value="Save and Continue" type="submit" /></div>
                      <div id="notification">If
                          applicable, please include at least one line item. Should you intend on
                          submitting many line items, you may want to continue adding line items
                          using the link on the next page and saving your updates periodically
                          since your login session may time out.
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default JPCreateBill;
