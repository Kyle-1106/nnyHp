import React, { useEffect } from 'react';
import './CancellationPolicy.css';

const CancellationPolicy: React.FC = () => {
  // ページ読み込み時に上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-container">
      <h1 className="policy-title">キャンセルポリシー</h1>
      
      <section className="policy-section">
        <h2>1. キャンセルについて</h2>
        <p>
          お客様のご都合によるキャンセルの場合、以下のキャンセル料が発生いたします。
          なお、キャンセルのご連絡はInstagramのDMにてお願いいたします。
        </p>
        
        <div className="cancellation-table">
          <div className="table-row header">
            <div className="table-cell">キャンセル時期</div>
            <div className="table-cell">キャンセル料</div>
          </div>
          <div className="table-row">
            <div className="table-cell">ご依頼確定前（お見積り段階）</div>
            <div className="table-cell">無料</div>
          </div>
          <div className="table-row">
            <div className="table-cell">ご入金前</div>
            <div className="table-cell">無料</div>
          </div>
          <div className="table-row">
            <div className="table-cell">ご入金後、制作開始前</div>
            <div className="table-cell">ご入金額の30%</div>
          </div>
          <div className="table-row">
            <div className="table-cell">ラフ案提出後</div>
            <div className="table-cell">ご入金額の50%</div>
          </div>
          <div className="table-row">
            <div className="table-cell">本制作開始後</div>
            <div className="table-cell">ご入金額の80%</div>
          </div>
          <div className="table-row">
            <div className="table-cell">完成品納品後</div>
            <div className="table-cell">返金不可</div>
          </div>
        </div>
      </section>
      
      <section className="policy-section">
        <h2>2. 制作スケジュールの変更について</h2>
        <p>
          お客様のご都合による制作スケジュールの変更は、納期に余裕がある場合に限り対応させていただきます。
          ただし、繁忙期や他のご依頼状況によっては、ご希望に添えない場合もございますので、あらかじめご了承ください。
        </p>
      </section>
      
      <section className="policy-section">
        <h2>3. 返金について</h2>
        <p>
          キャンセル料を差し引いた金額を、お客様の指定する銀行口座へ返金いたします。
          返金手続きには、1週間程度お時間をいただく場合がございます。
        </p>
      </section>
      
      <section className="policy-section">
        <h2>4. 制作者側の事情による中止について</h2>
        <p>
          制作者側の事情（病気・事故等）により制作の継続が困難となった場合は、
          制作の進行状況に応じて、適切な金額を返金させていただきます。
        </p>
      </section>
      
      <section className="policy-section">
        <h2>5. 免責事項</h2>
        <p>
          天災・事故・通信障害等の不可抗力により生じた損害については、責任を負いかねます。
          また、お客様のご都合による納期の遅延に関しては、追加料金が発生する場合がございます。
        </p>
      </section>
      
      <div className="policy-footer">
        <p>
          本ポリシーは予告なく変更される場合がございます。<br />
          最新のポリシーは常にウェブサイト上でご確認いただけます。
        </p>
        <p className="policy-date">最終更新日: 2023年10月1日</p>
      </div>
    </div>
  );
};

export default CancellationPolicy; 