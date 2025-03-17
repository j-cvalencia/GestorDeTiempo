import "./Aside.css";

export const Aside = () => {
  return (
    <aside>
      <ul>
        <li>
          <span>
            <i class="fa-solid fa-border-all"></i>
          </span>
          <p>Dashboard</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-clock"></i>
          </span>
          <p>Timesheets</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-calendar"></i>
          </span>
          <p>Calendar</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <p>Live locations</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-briefcase"></i>
          </span>
          <p>Time Off</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-clipboard"></i>
          </span>
          <p>Reports</p>
        </li>
        <li>
          <span>
            <i class="fa-solid fa-calendar-days"></i>
          </span>
          <p>Schedule</p>
        </li>
      </ul>
    </aside>
  );
};
