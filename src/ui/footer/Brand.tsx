import LogoRoundOutline from "../logo/LogoRoundOutline";

function Brand() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <LogoRoundOutline
          height={32}
          width={32}
          fill='white'
          circleFill='none'
          circleStroke='white'
          circleStrokeWidth='0.415782mm'
        />
        <span className='ml-2 text-xl font-bold'>Keisar Club</span>
      </div>
      <p className='mt-2 text-gray-400 text-center text-sm ' dir='rtl'>
        סטודיו קיסר התחיל בתור רעיון משפחתי ולאט לאט התפתח למעצמה. עם הזמן הבנו
        את הפוטנציאל הגדול שבאומנות שלנו, המוצרים אצלנו מתאימים לכולם – בין אם
        אתם רוצים תמונה חדשה שתגוון לכם את הסלון או נר ריחני שיכניס לכם אווירה
        הביתה. אצלנו תמצאו את כל מה שלא ידעתם שאתם צריכים.
      </p>
    </div>
  );
}

export default Brand;
