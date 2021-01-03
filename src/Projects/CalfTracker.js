const CalfTracker = {
  title: "Calf Tracker",
  subTitle: "Android App for Raising Calves",
  links: [
    {
      title: "Code",
      url: "https://github.com/bpercy11/CalfTrackerRepo",
    },
  ],
  imageFolderName: "CalfTracker",
  slides: [
    <span>
      For my Fall 2017 Software Engineering class, I proposed creating an
      Android app that would help dairy farmers record the process of raising
      calves. I came up with this idea from my personal experience growing up on
      a dairy farm. My proposal was in the top 20 of 130+ proposals, and a
      7-person team formed to create “Calf Tracker”.
    </span>,
    <span>
      In the planning stages of our project, my team went on a customer visit to
      our client Dan Truttmann, the owner of{" "}
      <a href="https://www.facebook.com/truttmanndairy/">Truttmann Dairy LLC</a>
      . Truttmann Dairy is a family-owned farm in Wisconsin that raises 300
      calves per year. Dan showed us around the farm and explained how he and
      his employees take care of calves through feedings, scheduled
      vaccinations, and illness monitoring.
    </span>,
    <span>
      I created the designs for our app using{" "}
      <a href="https://balsamiq.com/">Balsamiq</a>. I tested the design with Dan
      several times over the course of the process to ensure it fit his needs.
      We referenced his current methods of organizing information – paper and
      spreadsheets – to make sure the app did everything he needed and more.
    </span>,
    <span>
      These are a few screenshots from the app. The dashboard (left) gives quick
      access to every part of the app. Calf profiles (center) allows users to
      view, edit, and add information about a calf. For example, you can view a
      growth history (right) and track a calf’s rate of weight/height gain.
    </span>,
    <span>
      Calves are organized into a calf list (left). In the protocols section
      (center), you can view, edit, and add vaccinations, medicines, and
      illnesses. Vaccinations (right) and medicines include the dates they need
      to be administered.
    </span>,
    <span>
      Vaccines and illnesses are then used to schedule daily tasks (left). Data
      visualizations about the herd are located in the insights section
      (center). In settings (right), farm information and employee lists can be
      updated and the language can be changed from English to Spanish. The data
      is synced to a Firebase backend.
    </span>,
  ],
};

export default CalfTracker;
