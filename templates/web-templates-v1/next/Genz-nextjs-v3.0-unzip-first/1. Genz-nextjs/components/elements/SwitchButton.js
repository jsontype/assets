import { useTheme } from '@/utils/themeContext'

const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useTheme(true);

  // Function to toggle the theme
  const switchTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="switch-button">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked={isDarkMode}
          onChange={switchTheme}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
