/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$format', '$scan', '$+', '$to_i', '$===', '$<=', '$>=', '$<', '$>', '$last_match', '$post_match', '$eval_term', '$roll', '$successful_or_failed', '$parentheses', '$explicit_sign', '$match', '$map', '$split', '$[]', '$!=', '$size', '$clamp', '$-', '$join']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'AFF2e');

    var $nesting = [self].concat($parent_nesting), $AFF2e_explicit_sign$1, $AFF2e_eval_term$2, $AFF2e_parentheses$4, $AFF2e_successful_or_failed$5, $AFF2e_clamp$6, $AFF2e_rollDiceCommand$7;

    
    Opal.const_set($nesting[0], 'ID', "AFF2e");
    Opal.const_set($nesting[0], 'NAME', "ADVANCED FIGHTING FANTASY 2nd Edition");
    Opal.const_set($nesting[0], 'SORT_KEY', "\u3042\u3068\u306F\u3093\u3059\u3068\u3075\u3042\u3044\u3066\u3044\u3093\u304F\u3075\u3042\u3093\u305F\u3057\u30442");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "\u5BFE\u6297\u306A\u3057\u30ED\u30FC\u30EB\tFF{\u76EE\u6A19\u5024}+{\u88DC\u6B63}\n" + "\u5BFE\u6297\u30ED\u30FC\u30EB\tFR{\u80FD\u529B\u5024}+{\u88DC\u6B63}\n" + "\u6B66\u5668\u30ED\u30FC\u30EB\tFD[2,3,3,3,3,3,4]+{\u88DC\u6B63}\n" + "\u9632\u5177\u30ED\u30FC\u30EB\tFD[0,0,0,0,1+1,1+1,2+2]+{\u88DC\u6B63}\n");
    self.$setPrefixes(["FF.+", "FR.+", "FD.+"]);
    
    Opal.def(self, '$explicit_sign', $AFF2e_explicit_sign$1 = function $$explicit_sign(i) {
      var self = this;

      return self.$format("%+d", i)
    }, $AFF2e_explicit_sign$1.$$arity = 1);
    
    Opal.def(self, '$eval_term', $AFF2e_eval_term$2 = function $$eval_term(term) {
      var $$3, self = this, value = nil;

      
      value = 0;
      $send(term, 'scan', [/[+-]?\d+/], ($$3 = function(fact){var self = $$3.$$s || this;

      
        
        if (fact == null) {
          fact = nil;
        };
        return (value = $rb_plus(value, fact.$to_i()));}, $$3.$$s = self, $$3.$$arity = 1, $$3));
      return value;
    }, $AFF2e_eval_term$2.$$arity = 1);
    
    Opal.def(self, '$parentheses', $AFF2e_parentheses$4 = function $$parentheses(str) {
      var self = this;

      return $rb_plus($rb_plus("(", str), ")")
    }, $AFF2e_parentheses$4.$$arity = 1);
    
    Opal.def(self, '$successful_or_failed', $AFF2e_successful_or_failed$5 = function $$successful_or_failed(total, diff) {
      var self = this, $case = nil;

      return (function() {$case = total;
      if ((2)['$===']($case)) {if ($truthy($rb_le(diff, 1))) {
        return "\u6210\u529F\uFF08\u5927\u6210\u529F\u3067\u306F\u306A\u3044\uFF09"
      } else {
        return "\u5927\u6210\u529F\uFF01"
      }}
      else if ((12)['$===']($case)) {if ($truthy($rb_ge(diff, 12))) {
        return "\u5931\u6557\uFF08\u5927\u5931\u6557\u3067\u306F\u306A\u3044\uFF09"
      } else {
        return "\u5927\u5931\u6557\uFF01"
      }}
      else {if ($truthy($rb_le(total, diff))) {
        return "\u6210\u529F"
      } else {
        return "\u5931\u6557"
      }}})()
    }, $AFF2e_successful_or_failed$5.$$arity = 2);
    
    Opal.def(self, '$clamp', $AFF2e_clamp$6 = function $$clamp(i, min, max) {
      var self = this;

      if ($truthy($rb_lt(i, min))) {
        return min
      } else if ($truthy($rb_gt(i, max))) {
        return max
      } else {
        return i
      }
    }, $AFF2e_clamp$6.$$arity = 3);
    return (Opal.def(self, '$rollDiceCommand', $AFF2e_rollDiceCommand$7 = function $$rollDiceCommand(command) {
      var $a, $b, $$8, self = this, $case = nil, md = nil, term = nil, diff = nil, dice_command = nil, total = nil, dice_str = nil, expr = nil, succ = nil, sequence = nil, corr = nil, damage_slots = nil, slot_number = nil, damage = nil, result = nil, secret = nil;

      
      $case = command;
      if (/^FF/['$===']($case)) {
      md = $$($nesting, 'Regexp').$last_match();
      term = md.$post_match();
      diff = self.$eval_term(term);
      dice_command = "" + "2D6<=" + (diff);
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      expr = "" + (total) + "[" + (dice_str) + "]";
      succ = self.$successful_or_failed(total, diff);
      sequence = [self.$parentheses(dice_command), expr, succ];}
      else if (/^FR/['$===']($case)) {
      md = $$($nesting, 'Regexp').$last_match();
      term = md.$post_match();
      corr = self.$eval_term(term);
      dice_command = "" + "2D6" + (self.$explicit_sign(corr));
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      expr = "" + (total) + "[" + (dice_str) + "]" + (self.$explicit_sign(corr));
      sequence = [self.$parentheses(dice_command), expr, $rb_plus(total, corr)];}
      else if (/^FD/['$===']($case)) {
      md = $$($nesting, 'Regexp').$last_match();
      term = md.$post_match();
      md = /^\[(.+)\]/.$match(term);
      if ($truthy(md)) {
      } else {
        return ["\u30C0\u30E1\u30FC\u30B8\u30B9\u30ED\u30C3\u30C8\u306F\u5FC5\u9808\u3067\u3059\u3002", false]
      };
      term = md.$post_match();
      damage_slots = $send(md['$[]'](1).$split(","), 'map', [], ($$8 = function(t){var self = $$8.$$s || this;

      
        
        if (t == null) {
          t = nil;
        };
        return self.$eval_term(t);}, $$8.$$s = self, $$8.$$arity = 1, $$8));
      if ($truthy(damage_slots.$size()['$!='](7))) {
        return ["\u30C0\u30E1\u30FC\u30B8\u30B9\u30ED\u30C3\u30C8\u306E\u9577\u3055\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002", false]};
      corr = self.$eval_term(term);
      dice_command = "" + "1D6" + (self.$explicit_sign(corr));
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      expr = "" + (total) + (self.$explicit_sign(corr));
      slot_number = self.$clamp($rb_plus(total, corr), 1, 7);
      damage = damage_slots['$[]']($rb_minus(slot_number, 1));
      sequence = [self.$parentheses(dice_command), expr, $rb_plus(total, corr), "" + (damage) + "\u30C0\u30E1\u30FC\u30B8"];};
      result = sequence.$join(" \uFF1E ");
      secret = false;
      return [result, secret];
    }, $AFF2e_rollDiceCommand$7.$$arity = 1), nil) && 'rollDiceCommand';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
