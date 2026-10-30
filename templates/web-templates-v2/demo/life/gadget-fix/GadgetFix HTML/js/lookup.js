// Map your choices to your option value
var lookup = {
   'Option 1': ['Phone', 'Tablet', 'Laptop', 'Gaming Console'],
   'Option 2': ['Option 2 - Choice 1', 'Option 2 - Choice 2'],
   'Option 3': ['Option 3 - Choice 1'],
   'Phone' : ['Apple', 'Asus', 'Samsung'],
   'Gaming Console' : ['Playstation','Nintendo'],
};

var phone_lookup = {
   'Apple' : ['iPhone 4','iPhone 4s','iPhone 5','iPhone 5c','iPhone 5s','iPhone 6','iPhone 6 Plus','iPhone 6s','iPhone 6s Plus','iPhone SE','iPhone 7','iPhone 7 Plus','iPhone 8','iPhone 8 Plus','iPhone X','iPhone XR','iPhone XS','iPhone XS Max','iPhone 11','iPhone 11 Pro','iPhone 11 Pro Max','iPhone SE (2nd generation)','iPhone 12','iPhone 12 mini','iPhone 12 Pro','iPhone 12 Pro Max','iPhone 13','iPhone 13 mini','iPhone 13 Pro','iPhone 13 Pro Max','iPhone SE (3rd generation)','iPhone 14','iPhone 14 Plus','iPhone 14 Pro','iPhone 14 Pro Max','iPhone 15','iPhone 15 Plus','iPhone 15 Pro','iPhone 15 Pro Max'],
   'Asus'  : ['ASUS ZenFone','ASUS ZenFone 2','ASUS ZenFone 2 Laser','ASUS ZenFone 3','ASUS ZenFone 3 Deluxe','ASUS ZenFone 3 Max','ASUS ZenFone 3 Zoom','ASUS ZenFone 4','ASUS ZenFone 4 Pro','ASUS ZenFone 4 Selfie','ASUS ZenFone 4 Max','ASUS ZenFone 5','ASUS ZenFone 5Z','ASUS ZenFone 5Q','ASUS ZenFone 6','ASUS ZenFone 6Z','ASUS ZenFone 7','ASUS ZenFone 7 Pro','ASUS ZenFone 8','ASUS ZenFone 8 Flip','ASUS ZenFone Max','ASUS ZenFone Max Pro M1','ASUS ZenFone Max Pro M2','ASUS ZenFone Max M1','ASUS ZenFone Max M2','ASUS ZenFone Max Plus','ASUS ZenFone Max Shot','ASUS ROG Phone','ASUS ROG Phone II','ASUS ROG Phone 3','ASUS ROG Phone 5','ASUS ROG Phone 5s','ASUS ROG Phone 6','ASUS ROG Phone 6D','ASUS ROG Phone 7','ASUS ROG Phone 7 Ultimate'],
   'Samsung' : ['Samsung Galaxy S','Samsung Galaxy S2','Samsung Galaxy S3','Samsung Galaxy S4','Samsung Galaxy S5','Samsung Galaxy S6','Samsung Galaxy S6 Edge','Samsung Galaxy S6 Edge+','Samsung Galaxy S7','Samsung Galaxy S7 Edge','Samsung Galaxy S8','Samsung Galaxy S8+','Samsung Galaxy S9','Samsung Galaxy S9+','Samsung Galaxy S10','Samsung Galaxy S10e','Samsung Galaxy S10+','Samsung Galaxy S20','Samsung Galaxy S20+','Samsung Galaxy S20 Ultra','Samsung Galaxy S21','Samsung Galaxy S21+','Samsung Galaxy S21 Ultra','Samsung Galaxy S22','Samsung Galaxy S22+','Samsung Galaxy S22 Ultra','Samsung Galaxy S23','Samsung Galaxy S23+','Samsung Galaxy S23 Ultra','Samsung Galaxy Note','Samsung Galaxy Note II','Samsung Galaxy Note 3','Samsung Galaxy Note 4','Samsung Galaxy Note 5','Samsung Galaxy Note 7','Samsung Galaxy Note 8','Samsung Galaxy Note 9','Samsung Galaxy Note 10','Samsung Galaxy Note 10+','Samsung Galaxy Note 20','Samsung Galaxy Note 20 Ultra','Samsung Galaxy Z Fold','Samsung Galaxy Z Fold 2','Samsung Galaxy Z Fold 3','Samsung Galaxy Z Fold 4','Samsung Galaxy Z Flip','Samsung Galaxy Z Flip 3','Samsung Galaxy Z Flip 4'],
}

var gaming_lookup = {
   'Playstation' : ['PlayStation','PlayStation 2','PlayStation 3','PlayStation 4','PlayStation 4 Pro','PlayStation 5','PlayStation Portable (PSP)','PlayStation Portable 2000','PlayStation Portable 3000','PlayStation Vita','PlayStation TV','PlayStation Classic','PlayStation VR','PlayStation VR2','DualShock controller','DualShock 2 controller','DualShock 3 controller','DualShock 4 controller','DualSense controller','PlayStation Move','PlayStation Camera','PlayStation Eye','PlayStation Network','PlayStation Now','PlayStation Plus'],
}

// When an option is changed, search the above for matching choices
$('#device').on('change', function() {
   // Set selected option as variable
   var selectValue = $(this).val();

   // Empty the target field
   $('#brand').empty();

   $('#brand').append('<option value="" disabled selected>Please select an option</option>');
   
   // For each chocie in the selected option
   for (i = 0; i < lookup[selectValue].length; i++) {
      // Output choice in the target field
      $('#brand').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
   }
});

$('#brand').on('change', function() {
   // Set selected option as variable
   var selectValue = $(this).val();

   // Empty the target field
   $('#type').empty();

   $('#type').append('<option value="" disabled selected>Please select an option</option>');
   
   // For each chocie in the selected option
   for (i = 0; i < phone_lookup[selectValue].length; i++) {
      // Output choice in the target field
      $('#type').append("<option value='" + phone_lookup[selectValue][i] + "'>" + phone_lookup[selectValue][i] + "</option>");
   }
});