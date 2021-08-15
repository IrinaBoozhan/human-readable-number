module.exports = function toReadable(number) {

   const lengthNumber = String(number).length

   let a = '';
   let tens = '';
   let ten = Math.trunc(number / 10);   //целая часть от деления ДЕСЯТКИ
   let b = number - ten * 10;           //единицы
   let hundred = Math.trunc(number / 100);
   let hundred2 = number - hundred * 100;

   function one(number) {
      if (number === 0) { a = 'zero' };
      if (number === 1) { a = 'one' };
      if (number === 2) { a = 'two' };
      if (number === 3) { a = 'three' };
      if (number === 4) { a = 'four' };
      if (number === 5) { a = 'five' };
      if (number === 6) { a = 'six' };
      if (number === 7) { a = 'seven' };
      if (number === 8) { a = 'eight' };
      if (number === 9) { a = 'nine' };
      return a;
   }

   function decade(number) {
      if (b > 0) {
         let c = one(b);
         a = tens + ' ' + c;
         return a
      }
      else {
         return tens
      }

   }

   function decadeAll(number) {
      if (ten === 1) {
         if ((number - ten * 10) === 0) { a = 'ten' }
         if ((number - ten * 10) === 1) { a = 'eleven' }
         if ((number - ten * 10) === 2) { a = 'twelve' }
         if ((number - ten * 10) === 3) { a = 'thirteen' }
         if ((number - ten * 10) === 4) { a = 'fourteen' }
         if ((number - ten * 10) === 5) { a = 'fifteen' }
         if ((number - ten * 10) === 6) { a = 'sixteen' }
         if ((number - ten * 10) === 7) { a = 'seventeen' }
         if ((number - ten * 10) === 8) { a = 'eighteen' }
         if ((number - ten * 10) === 9) { a = 'nineteen' }
         return a
      }
      if (ten === 2) {
         tens = 'twenty';
         return decade(number)
      }
      else if (ten === 3) {
         tens = 'thirty'
         return decade(number)
      }
      else if (ten === 4) {
         tens = 'forty'
         return decade(number)
      }
      else if (ten === 5) {
         tens = 'fifty'
         return decade(number)
      }
      else if (ten === 6) {
         tens = 'sixty'
         return decade(number)
      }
      else if (ten === 7) {
         tens = 'seventy'
         return decade(number)
      }
      else if (ten === 8) {
         tens = 'eighty'
         return decade(number)
      }
      else if (ten === 9) {
         tens = 'ninety'
         return decade(number)
      }
   }


   if (lengthNumber === 1) {
      return one(number);
   }
   else if (lengthNumber === 2) {
      return decadeAll(number)
   }
   else if (lengthNumber === 3) {
      ten = Math.trunc(hundred2 / 10)
      if (ten % 10 === 0) {
         if (b === 0) {
            res = one(hundred) + ' hundred'
            return res
         }
         else if (b !== 0) {
            res = one(hundred) + ' hundred ' + one(b)
            return res
         }
      }
      else
         res = one(hundred) + ' hundred ' + decadeAll(hundred2)
      return res
   }
}

