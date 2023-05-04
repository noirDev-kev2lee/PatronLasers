import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

export function AddCustomer() {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Customer</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Address"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Email"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
}
export function AddAppointment() {
  const [isLoading, setLoading] = React.useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');

  const handleSaveAppointment = async () => {
    try {
      if (
        fname === '' ||
        lname === '' ||
        service === '' ||
        startDate === '' ||
        endDate === ''
      ) {
        Alert.alert('Email or password must be provided');
      } else {
        setLoading(true);
        await axios
          .post('http://15.236.168.186:7000/api/v1/appointments/', {
            patient_id: '75757',
            clinic_name: 'hghgg',
            fname: fname,
            lname: lname,
            service_type: service,
            start_date: startDate,
            start_time: '55t6',
            end_date: endDate,
            end_time: '44884',
            job_status: 'pending',
          })
          .then(() => {
            setLoading(false);
            Alert.alert('Data sent Successfully!');
          })
          .catch(() => {
            Alert.alert('Data sent Successfully!');
          });
      }
    } catch (error) {
      Alert.alert('Server Error or user not found');
      setLoading(false);
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Appointment</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setFname}
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setLname}
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setService}
                placeholder="Service Type"
              />
              <View style={styles.inputStyle}>
                <TextInput style={styles.dateText}
                  value={startDate.toDateString()}
                />
              <Pressable  style={styles.datePicker} onPress={() => setOpen(true)}>
                <Icon name="calendar" size={25} color="#000000"/>
              <DatePicker
                modal
                open={open}
                date={startDate}
                onConfirm={(startDate) => {
                  setOpen(false)
                  setStartDate(startDate)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
                />
              </Pressable>
              </View>
              <View style={styles.inputStyle}>
                <TextInput style={styles.dateText}
                  value={endDate.toDateString()}
                />
              <Pressable  style={styles.datePicker} onPress={() => setOpen2(true)}>
                <Icon name="calendar" size={25} color="#000000"/>
              <DatePicker
                modal
                open={open2}
                date={endDate}
                onConfirm={(endDate) => {
                  setOpen2(false)
                  setEndDate(endDate)
                }}
                onCancel={() => {
                  setOpen2(false)
                }}
                />
              </Pressable>
              </View>
              <Pressable
                style={styles.pressBtn}
                onPress={handleSaveAppointment}>
                {isLoading ? (
                  <ActivityIndicator
                    color="white"
                    style={styles.activityIndicator}
                  />
                ) : (
                  <Text style={styles.pressTxt}>Add Appointment</Text>
                )}
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
}
const AddProduct = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add New Product</Text>
            </View>
            <View style={[styles.form, {height: 300}]}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                placeholder="Serial Number"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                placeholder="Product Name"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export const AboutUs = () => {
  return (
    <ScrollView style={styles.aboutUsContainer}>
      <View style={styles.aboutUs}>
        <Image style={styles.logo} source={require('../assets/001.png')} />
        <Text style={styles.aboutUsPara}>
          חברת פטרון לייזר היא חברה מובילה בתחום הייצור, ייבוא ושיווק מכשור
          טכנולוגי חדשני ומתקדם בעולם האסתטיקה בישראל. החברה הוקמה בשנת 2009, על
          ידי ארז מלכה ואבי גבסו, והפכה במרוצת השנים למותג מוביל בתחום המכשור
          הטכנולוגי בענף הרפואה, האסתטיקה והיופי. מאז ועד היום החברה התחילה את
          דרכה בתחום המכשור הטכנולוגי, והוקמה על בסיס החזון: "לייצר ולפתח מכשור
          טכנולוגי המבוסס על הטכנולוגיה החדשנית והמתקדמת ביותר בעולם". המכשור
          הטכנולוגי של פטרון לייזר בעל תו תקן מחמיר הכולל בקרת איכות כחול לבן,
          שמסייעת בהבנת הצורך של לקוח הקצה ומתן פתרונות טכנולוגיים בהתאמה אישית.
          פטרון לייזר צברה ניסיון עשיר, מקצוענות ומוניטין גבוה בתחום המכשור
          הטכנולוגי. עד שנת 2018, החברה שיווקה מכשור טכנולוגי לשוק המוסדי
          ולחברות משווקות. בשנת 2018, החליטה החברה לשווק את המכשור הטכנולוגי
          שברשותה, גם בפלטפורמת שיווק ישיר למכוני יופי, קוסמטיקה, רשתות טיפוח
          ויופי, מכוני כושר וקליניקות פרטיות. כיום, ניתן למצוא את המכשור
          הטכנולוגי של חברת פטרון לייזר ברוב מכוני היופי והאסתטיקה ברחבי הארץ.
          המכשור החדשני והמתקדם משמש לצורך מגוון רחב של טיפולים אסתטיים ורפואיים
          כגון: טיפולי פנים, טיפולי שיניים, הסרת שיער, הסרת קעקועים, חיטוב הגוף,
          שיזוף ביתי, טיפולי אנטי אייג'ינג ועוד. פטרון לייזר: חדשנות, מקצוענות,
          מצוינות ואיכות חסרת פשרות! חברת פטרון לייזר, חרטה על דגלה ערכים של
          חדשנות, מקצוענות, אמינות, מצוינות, איכות גבוהה וחסרת פשרות, שירות
          אדיב, יחס אישי, אוזן קשבת, שביעות רצון הלקוח, ליווי 360 ואהבה גדולה
          לעולם היופי והאסתטיקה. ליווי 360 חוויות הלקוח חשובה לנו, לאין שיעור,
          ואנו מעניקים ליווי 360 ללקוחותינו לאורך כל הדרך – החל משלב הייעוץ
          הראשוני, דרך ההדרכה הטכנית ועד לתגובות של לקוחות הקצה, כל זאת במטרה
          להעניק מעטפת שלמה ללקוחותינו
        </Text>
        <Text style={styles.aboutUsFooter1}>Patron Devs</Text>
        <Text style={styles.aboutUsFooter}>&copy;2023</Text>
      </View>
    </ScrollView>
  );
};
export const FinancialArea = () => {
  return <View />;
};
export default AddProduct;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  textInput: {
    fontFamily: 'Roboto',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#e6e6e9',
    paddingLeft: 20,
    width: 300,
    height: 60,
    color: '#000',
    borderRadius: 12,
  },
  dateText:{
    marginLeft:10,
    color:'#222',
    fontFamily:'Inter-Bold',
    fontSize:20
  },
  inputStyle: {
    margin:10,
    flexDirection: 'row',
    borderRadius: 12,
    width: 300,
    height: 60,
    color:'#222',
    backgroundColor: '#D9D9D9',
  },
  datePicker:{
    left:100,
    marginTop:15,
  },
  form: {
    flex: 1,
    height: 600,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressBtn: {
    alignItems: 'center',
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 300,
    height: 60,
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  pressTxt1: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eee0cb',
  },
  container: {},

  title: {
    textAlign: 'center',
    color: '#222',
    fontSize: 25,
    marginBottom: 10,
  },
  keyboard: {flex: 1, padding: 30},
  arrow: {
    color: 'white',
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
    color: '#131035',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  aboutUsContainer: {
    flex: 1,
    backgroundColor: '#131035',
    paddingVertical: 20,
  },
  aboutUs: {
    height: 'auto',
  },
  aboutUsPara: {
    fontSize: 14,
    marginTop: 20,
    left: 40,
    width: 350,
  },
  aboutUsFooter: {
    textAlign: 'center',
  },
  aboutUsFooter1: {
    marginTop: 300,
    textAlign: 'center',
  },
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
